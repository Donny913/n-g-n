import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import politicsTrack from '../../audio/track1.mp3';
import crimeTrack from '../../audio/track3.mp3';
import sportTrack from '../../audio/track4.mp3';

import speechActions from '../../actions/speechActions';
import newsActions from '../../actions/newsActions';

class Audiotracks extends Component {
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
    const { appIsRunning, topic, currentNewsDescription } = this.props;
    if (prevProps.appIsRunning && !appIsRunning) {
      this.pauseAudio();
    } else if (!prevProps.appIsRunning && appIsRunning) {
      this.playAudio();
    } else if (prevProps.topic && !topic) {
      this.cancellAudio();
    } else if (
      !prevProps.currentNewsDescription &&
      currentNewsDescription &&
      !speechActions.isPlaying()
    ) {
      this.readTheNews();
    } else if (prevProps.currentNewsDescription !== currentNewsDescription) {
      this.readTheNews();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.cancellAudio);
  }

  pauseAudio = () => {
    this.theAudio.pause();
    speechActions.pause();
  };

  playAudio = () => {
    this.theAudio.play();
    speechActions.resume();
  };

  cancellAudio = () => {
    this.theAudio.pause();
    speechActions.cancel();
  };

  readTheNews = () => {
    speechActions.cancel();
    speechActions.speak({
      text: this.props.currentNewsDescription,
      callback: newsActions.getNextNewsItem
    });
  };

  getAudioProps = topic => {
    const props = {
      loop: true,
      autoPlay: true,
      src: null
    };
    switch (topic) {
      case 'politics':
        props.src = politicsTrack;
        props.volume = 0.5;
        break;
      case 'crime':
        props.src = crimeTrack;
        props.volume = 0.5;
        break;
      case 'sport':
        props.src = sportTrack;
        props.volume = 0.8;
        break;
      default:
    }
    return props;
  };

  render() {
    return (
      <div>
        <audio
          ref={audio => {
            this.theAudio = audio;
          }}
          {...this.getAudioProps(this.props.topic)}
        />
      </div>
    );
  }
}

Audiotracks.propTypes = {
  topic: PropTypes.string,
  appIsRunning: PropTypes.bool,
  currentNewsDescription: PropTypes.string
};

Audiotracks.defaultProps = {
  topic: null,
  appIsRunning: false,
  currentNewsDescription: null
};

export default connect(({ topic, appIsRunning, news, currentNewsIndex }) => ({
  topic,
  appIsRunning,
  currentNewsDescription:
    news[currentNewsIndex] && news[currentNewsIndex].description
}))(Audiotracks);
