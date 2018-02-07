import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Variant from '../../components/Variant/Variant';
import Intro from '../../components/Intro/Intro';

import politicImg from '../../images/politic.jpg';
import crimeImg from '../../images/crime.png';
import sportImg from '../../images/sport.png';

import crimeAudio from '../../audio/crime.wav';
import politicsAudio from '../../audio/politics.wav';
import sportAudio from '../../audio/sport.wav';

import isMobile from '../../utils/isMobile';
import formsActions from '../../actions/formsActions';

const FirstWindow = ({ topic }) => {
  if (isMobile()) {
    formsActions.initForm('mobileWarning');
  }
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
