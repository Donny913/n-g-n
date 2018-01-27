import React, { Component } from 'react';
import isMobile from '../../utils/isMobile';

export default class Variant extends Component {
  handleMouseEnter = () => {
    if (isMobile()) return;
    this.theAudio.play();
  };

  handleMouseLeave = () => {
    if (isMobile()) return;
    this.theAudio.pause();
    this.theAudio.currentTime = 0;
  };

  handleOnClick = event => {
    console.log('variant clicked');
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
          <img src={this.props.srcImg} alt={'image for ' + this.props.id} />
        </div>
        <div className="variant__description">
          <p>{this.props.description}</p>
        </div>
        <audio
          ref={audio => (this.theAudio = audio)}
          src={this.props.audioSrc}
        />
      </div>
    );
  }
}
