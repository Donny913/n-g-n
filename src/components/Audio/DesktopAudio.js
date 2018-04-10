import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import audioUtils from './audioUtils';
import speechActions from '../../actions/speechActions';
import newsActions from '../../actions/newsActions';

class Audio extends Component {
  componentDidMount() {
    speechActions.speak({
      text: 'okay lets go',
      voice: 'UK English Male',
      rate: 0.85,
      pitch: 0.1,
      callback: () => {
        if (this.props.currentNewsDescription) {
          this.readTheNews();
        }
      }
    });
    window.addEventListener('beforeunload', this.cancellAudio);
  }

  componentDidUpdate(prevProps) {
    const { appIsRunning, currentNewsDescription } = this.props;
    if (
      !prevProps.currentNewsDescription &&
      currentNewsDescription &&
      !speechActions.isPlaying()
    ) {
      this.readTheNews();
    } else if (
      prevProps.currentNewsDescription &&
      prevProps.currentNewsDescription !== currentNewsDescription
    ) {
      this.readTheNews();
    } else if (prevProps.currentNewsDescription === currentNewsDescription) {
      if (prevProps.appIsRunning && !appIsRunning) {
        this.pauseAudio();
      } else if (!prevProps.appIsRunning && appIsRunning) {
        this.playAudio();
      }
    }
  }

  componentWillUnmount() {
    this.cancellAudio();
    window.removeEventListener('beforeunload', this.cancellAudio);
  }

  pauseAudio = () => {
    if (this.audio) {
      this.audio.pause();
    }
    speechActions.pause();
  };

  playAudio = () => {
    if (this.audio) {
      this.audio.play();
    }
    speechActions.resume();
  };

  cancellAudio = () => {
    if (this.audio) {
      this.audio.pause();
    }
    if (speechActions.isPlaying()) {
      speechActions.cancel();
    }
  };

  readTheNews = () => {
    if (speechActions.isPlaying()) {
      speechActions.cancel();
    }
    if (this.audio) {
      this.audio.play();
    }
    speechActions.speak({
      text: this.props.currentNewsDescription,
      callback: newsActions.getNextNewsItem
    });
  };

  render() {
    return (
      <div>
        <audio
          ref={audioElement => {
            this.audio = audioElement;
          }}
          {...audioUtils.getAudioTrackProps(this.props.topic)}
        />
      </div>
    );
  }
}

Audio.propTypes = {
  topic: PropTypes.string,
  appIsRunning: PropTypes.bool,
  currentNewsDescription: PropTypes.string
};

Audio.defaultProps = {
  topic: null,
  appIsRunning: false,
  currentNewsDescription: null
};

export default connect(({ topic, appIsRunning, news, currentNewsIndex }) => ({
  topic,
  appIsRunning,
  currentNewsDescription:
    news[currentNewsIndex] && news[currentNewsIndex].description[0]
}))(Audio);
