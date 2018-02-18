import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { BackgroundSection } from './BackgroundUnits';
import Images from './Images';

class Background extends Component {
  static propTypes = {
    topic: PropTypes.string.isRequired
  };

  getImages = topic => {
    return Images[topic];
  };

  state = {
    index: 1,
    images: this.getImages(this.props.topic)
  };

  interval = null;

  componentDidMount() {
    this.nextImage();
  }

  componentWillUnmount() {
    this.cancelInterval();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.topic !== this.props.topic) {
      this.cancelInterval();
      this.setState(
        {
          index: 0,
          images: this.getImages(nextProps.topic)
        },
        () => {
          setTimeout(() => {
            this.nextImage();
          }, 5000);
        }
      );
    }
  }

  nextImage = () => {
    this.interval = setInterval(() => {
      this.setState(prevState => {
        return {
          index:
            prevState.index + 1 < this.state.images.length
              ? prevState.index + 1
              : 0
        };
      });
    }, 5000);
  };

  cancelInterval = () => {
    clearInterval(this.interval);
  };

  render() {
    return (
      <div className="background-wrapper">
        <BackgroundSection
          isHidden={this.state.index === 0}
          src={this.state.images[0]}
        />
        <BackgroundSection
          isHidden={this.state.index === 1}
          src={this.state.images[1]}
        />
        <BackgroundSection
          isHidden={this.state.index === 2}
          src={this.state.images[2]}
        />
        <BackgroundSection
          isHidden={this.state.index === 3}
          src={this.state.images[3]}
        />
      </div>
    );
  }
}

export default connect(({ topic }) => ({ topic }))(Background);
