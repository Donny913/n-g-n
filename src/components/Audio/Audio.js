import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import politicsTrack from '../../audio/track1.mp3';
import crimeTrack from '../../audio/track3.mp3';
import sportTrack from '../../audio/track4.mp3';

class Audiotracks extends Component {
  getTopicalAudioTrack = topic => {
    switch (topic) {
      case 'politics':
        return politicsTrack;
      case 'crime':
        return crimeTrack;
      case 'sport':
        return sportTrack;
      default:
        return null;
    }
  };

  render() {
    return (
      <div>
        <audio
          ref={audio => {
            this.theAudio = audio;
          }}
          loop
          autoPlay
          volume="0.2"
          src={this.getTopicalAudioTrack(this.props.topic)}
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
