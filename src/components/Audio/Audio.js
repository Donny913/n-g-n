import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DesktopAudio from './DesktopAudio';
import MobileAudio from './MobileAudio';

const Audio = ({ isMobile }) => {
  return isMobile ? <MobileAudio /> : <DesktopAudio />;
};

Audio.propTypes = {
  isMobile: PropTypes.bool.isRequired
};

export default connect(({ isMobile }) => ({ isMobile }))(Audio);
