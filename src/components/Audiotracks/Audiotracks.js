import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import politicsTrack from '../../audio/track1.mp3';
import crimeTrack from '../../audio/track3.mp3';
import sportTrack from '../../audio/track4.mp3';

function getTopicalAudioTrack(topic) {
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
}

const Audiotracks = ({ topic }) => {};

Audiotracks.propTypes = {
  topic: PropTypes.string
};

Audiotracks.defaultProps = {
  topic: null
};

export default connect()(Audiotracks);
