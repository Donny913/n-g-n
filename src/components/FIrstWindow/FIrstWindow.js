import React from 'react';
import { connect } from 'react-redux';

import Variant from '../Variant/Variant';
import Intro from '../Intro/Intro';

import politicImg from '../../images/politic.jpg';
import crimeImg from '../../images/crime.png';
import sportImg from '../../images/sport.png';

import crimeAudio from '../../audio/crime.wav';
import politicsAudio from '../../audio/politics.wav';
import sportAudio from '../../audio/sport.wav';

const FirstWindow = () => {
  return (
    <section className="first-window animated fadeIn">
      <div className={'first-window__main '}>
        <div className="types">
          <Intro />
          <Variant
            id="politics"
            audioSrc={politicsAudio}
            srcImg={politicImg}
            description="Politics"
          />
          <Variant
            id="crime"
            audioSrc={crimeAudio}
            srcImg={crimeImg}
            description="Crime"
          />
          <Variant
            id="sport"
            audioSrc={sportAudio}
            srcImg={sportImg}
            description="Sport"
          />
        </div>
      </div>
    </section>
  );
};

export default connect(state => ({ topic: state.topic }))(FirstWindow);
