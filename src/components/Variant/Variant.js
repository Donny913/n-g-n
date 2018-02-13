import React, { Component } from 'react';
import PropTypes from 'prop-types';

import isMobile from '../../utils/isMobile';

import variantsActions from '../../actions/variantsActions';
import newsActions from '../../actions/newsActions';

// TODO remove test values

const testNews = [
  {
    title: 'test title',
    description: 'dadasdasd dadasdasd dadasdasddadasdasd dadasdasd dadasdasd',
    link: 'http://google.com'
  },
  {
    title: 'test title',
    description: 'dadasdasd dadasdasd dadasdasddadasdasd dadasdasd dadasdasd',
    link: 'google.com'
  },
  {
    title: 'test title',
    description: 'dadasdasd dadasdasd dadasdasddadasdasd dadasdasd dadasdasd',
    link: 'google.com'
  },
  {
    title: 'test title',
    description: 'dadasdasd dadasdasd dadasdasddadasdasd dadasdasd dadasdasd',
    link: 'google.com'
  },
  {
    title: 'test title',
    description: 'dadasdasd dadasdasd dadasdasddadasdasd dadasdasd dadasdasd',
    link: 'google.com'
  }
];

class Variant extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    srcImg: PropTypes.string.isRequired,
    audioSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };

  handleMouseEnter = () => {
    if (isMobile()) return;
    this.theAudio.play();
  };

  handleMouseLeave = () => {
    if (isMobile()) return;
    this.theAudio.pause();
    this.theAudio.currentTime = 0;
  };

  handleOnClick = () => {
    Promise.all([
      variantsActions.chooseVariant(this.props.id),
      newsActions.newsInit(testNews)
    ]);
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

export default Variant;
