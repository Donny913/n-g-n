import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import audioUtils from './audioUtils';
import speechActions from '../../actions/speechActions';
import newsActions from '../../actions/newsActions';

class MobileAudio extends Component {
  audioTrack = null;
  audioSpeech = null;
  audioSpeechPaths = {};
  updatedTimesWithoutAudio = 0;

  componentDidMount() {
    this.audioTrack.play();
    this.startReadingNews();
    window.addEventListener('beforeunload', this.cancellAudio);
  }

  componentDidUpdate(prevProps) {
    const { currentNewsDescription, currentNewsIndex } = this.props;
    if (!prevProps.currentNewsDescription && currentNewsDescription) {
      this.startReadingNews();
    } else if (prevProps.currentNewsIndex !== currentNewsIndex) {
      this.readCurrentNews();
    }
  }

  cancellAudio = () => {
    this.audioTrack.pause();
    this.audioTrack.currentTime = 0;
    this.audioSpeech.pause();
    this.audioSpeech.currentTime = 0;
  };

  startReadingNews = async () => {
    const { currentNewsDescription, currentNewsIndex } = this.props;
    if (!currentNewsDescription) return;
    this.getAudioSpeechPath(currentNewsDescription, currentNewsIndex, () =>
      this.forceUpdate(this.readCurrentNews)
    );
  };

  getAudioSpeechPath = async (description, index, cb) => {
    try {
      const fileName = await speechActions.getAudioSpeechPath(description);
      this.audioSpeechPaths[index] = fileName;
    } catch (error) {
      this.audioSpeechPaths[index] = 'error';
    }
    if (typeof cb === 'function') {
      cb();
    }
  };

  readCurrentNews = () => {
    const { news, currentNewsIndex } = this.props;
    if (this.audioSpeechPaths[currentNewsIndex] !== 'error') {
      this.audioSpeech.play();
      this.audioSpeech.addEventListener('ended', this.nextAudioSpeech);
    } else {
      // setTimeout(() => {
      //   if (this.updatedTimesWithoutAudio < 2) {
      //     this.forceUpdate(() => {
      //       this.updatedTimesWithoutAudio += 1;
      //       this.readCurrentNews();
      //     });
      //   } else {
      //     this.updatedTimesWithoutAudio = 0;
      //     this.nextAudioSpeech();
      //   }
      // }, 1000);
      this.nextAudioSpeech();
    }

    let neededNewsSpeechIndexes = [];
    if (news.length - currentNewsIndex < 3) {
      neededNewsSpeechIndexes = Object.keys(news).slice(currentNewsIndex);
    } else {
      neededNewsSpeechIndexes = Object.keys(news).slice(
        currentNewsIndex,
        currentNewsIndex + 3
      );
    }

    neededNewsSpeechIndexes.forEach(index => {
      if (!this.audioSpeechPaths[index]) {
        this.getAudioSpeechPath(news[index].description[0], index);
      }
    });
  };

  nextAudioSpeech = () => {
    this.audioSpeech.removeEventListener('ended', this.nextAudioSpeech);
    newsActions.getNextNewsItem();
  };

  render() {
    const { currentNewsDescription, currentNewsIndex, topic } = this.props;
    return (
      <div>
        <audio
          ref={audioElement => {
            this.audioTrack = audioElement;
          }}
          {...audioUtils.getAudioTrackProps(topic)}
        />
        {currentNewsDescription &&
          this.audioSpeechPaths[currentNewsIndex] && (
            <audio
              ref={audioElement => {
                this.audioSpeech = audioElement;
              }}
              src={this.audioSpeechPaths[currentNewsIndex]}
            />
          )}
      </div>
    );
  }
}

MobileAudio.propTypes = {
  topic: PropTypes.string,
  appIsRunning: PropTypes.bool,
  currentNewsDescription: PropTypes.string,
  currentNewsIndex: PropTypes.number,
  news: PropTypes.array
};

MobileAudio.defaultProps = {
  topic: null,
  appIsRunning: false,
  currentNewsIndex: 0,
  currentNewsDescription: null,
  news: null
};

export default connect(({ topic, appIsRunning, news, currentNewsIndex }) => ({
  topic,
  appIsRunning,
  currentNewsIndex,
  news,
  currentNewsDescription: news[currentNewsIndex]
    ? news[currentNewsIndex].description[0]
    : null
}))(MobileAudio);
