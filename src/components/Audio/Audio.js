import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import politicsTrack from '../../audio/track1.mp3';
import crimeTrack from '../../audio/track3.mp3';
import sportTrack from '../../audio/track4.mp3';

class Audiotracks extends Component {
  getAudioProps = topic => {
    const props = {
      loop: true,
      autoPlay: true
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
  topic: PropTypes.string
};

Audiotracks.defaultProps = {
  topic: null
};

export default connect(({ topic, appIsRunning }) => ({
  topic,
  appIsRunning
}))(Audiotracks);
