import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Variant from '../Variant/Variant';
import Intro from '../Intro/Intro';

import politicImg from '../../images/politic.jpg';
import crimeImg from '../../images/crime.png';
import sportImg from '../../images/sport.png';

import crimeAudio from '../../audio/crime.wav';
import politicsAudio from '../../audio/politics.wav';
import sportAudio from '../../audio/sport.wav';

const FirstWindow = ({ topic }) => {
  if (!topic) {
    return (
      <section className="first-window animated fadeIn">
        <div className="first-window__main">
          <div className="variants">
            <Intro />
            <Variant
              id="politics"
              audioSrc={politicsAudio}
              srcImg={politicImg}
              title="Politics"
            />
            <Variant
              id="crime"
              audioSrc={crimeAudio}
              srcImg={crimeImg}
              title="Crime"
            />
            <Variant
              id="sport"
              audioSrc={sportAudio}
              srcImg={sportImg}
              title="Sport"
            />
          </div>
        </div>
      </section>
    );
  }
  return null;
};

FirstWindow.propTypes = {
  topic: PropTypes.string
};

FirstWindow.defaultProps = {
  topic: null
};

export default connect(state => ({ topic: state.topic }))(FirstWindow);
