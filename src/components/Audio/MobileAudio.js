import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import audioUtils from './audioUtils';
import speechActions from '../../actions/speechActions';

class MobileAudio extends Component {
  audioTrack = null;
  audioVoice = null;
  audioVoicePaths = {};

  state = {
    currentSpeechAudioFileName: ''
  };

  componentDidMount() {
    this.readTheNews();
    window.addEventListener('beforeunload', this.cancellAudio);
  }

  componentDidUpdate(prevProps) {
    const { appIsRunning, currentNewsDescription } = this.props;
    if (!prevProps.currentNewsDescription && currentNewsDescription) {
      this.readTheNews();
    }
    // } else if (
    //   prevProps.currentNewsDescription &&
    //   prevProps.currentNewsDescription !== currentNewsDescription
    // ) {
    //   this.readTheNews();
    // } else if (prevProps.currentNewsDescription === currentNewsDescription) {
    //   if (prevProps.appIsRunning && !appIsRunning) {
    //     this.pauseAudio();
    //   } else if (!prevProps.appIsRunning && appIsRunning) {
    //     this.playAudio();
    //   }
    // }
  }

  // componentWillUnmount() {
  //   this.cancellAudio();
  //   window.removeEventListener('beforeunload', this.cancellAudio);
  // }

  // pauseAudio = () => {
  //   if (this.audio) {
  //     this.audio.pause();
  //   }
  // };

  // playAudio = () => {
  //   if (this.audio) {
  //     this.audio.play();
  //   }
  // };

  // cancellAudio = () => {
  //   if (this.audio) {
  //     this.audio.pause();
  //   }
  // };

  // getNextSpeechAudio = () => {};

  readTheNews = async () => {
    const { currentNewsDescription } = this.props;

    this.audioTrack.play();
    if (currentNewsDescription) {
      const fileName = await speechActions.getAudioSpeechPath(
        this.props.currentNewsDescription
      );
      this.setState(
        {
          currentSpeechAudioFileName: fileName
        },
        () => {
          this.audioVoice.play();
        }
      );
    }
  };

  render() {
    console.log('render mobile audio');
    console.log(this.state.currentSpeechAudioFileName);
    return (
      <div>
        <audio
          ref={audioElement => {
            this.audioTrack = audioElement;
          }}
          {...audioUtils.getAudioTrackProps(this.props.topic)}
        />
        {this.state.currentSpeechAudioFileName && (
          <audio
            ref={audioElement => {
              this.audioVoice = audioElement;
            }}
            src={this.state.currentSpeechAudioFileName}
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
  news: PropTypes.array
};

MobileAudio.defaultProps = {
  topic: null,
  appIsRunning: false,
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
