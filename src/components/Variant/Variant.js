import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import appActions from '../../actions/appActions';

class Variant extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    srcImg: PropTypes.string.isRequired,
    audioSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isMobile: PropTypes.bool.isRequired
  };

  handleMouseEnter = () => {
    if (this.props.isMobile) return;
    this.theAudio.play();
  };

  handleMouseLeave = () => {
    if (this.props.isMobile) return;
    this.theAudio.pause();
    this.theAudio.currentTime = 0;
  };

  handleOnClick = () => {
    appActions.appInit(this.props.id);
  };

  render() {
    return (
      <div
        id={this.props.id}
        className="variant"
        onClick={this.handleOnClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="variant__image">
          <img src={this.props.srcImg} alt={`for ${this.props.id}`} />
        </div>
        <div className="variant__title">
          <p>{this.props.title}</p>
        </div>
        <audio
          ref={audio => {
            this.theAudio = audio;
          }}
          src={this.props.audioSrc}
        />
      </div>
    );
  }
}

export default connect(({ isMobile }) => ({ isMobile }))(Variant);
