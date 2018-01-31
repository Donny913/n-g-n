import React from 'react';
import isMobile from '../../utils/isMobile';

const Intro = () => {
  return (
    <div className="intro">
      <p className={isMobile() ? 'none' : 'intro__text'}>
        Поводите мышкой по вариантам и кликни на интересующую тему новостей
      </p>
      <p className={isMobile() ? 'intro__text' : 'none'}>
        Выберите интересующую тему новостей
      </p>
    </div>
  );
};

export default Intro;
