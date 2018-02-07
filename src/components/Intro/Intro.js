import React from 'react';
import isMobile from '../../utils/isMobile';

const Intro = () => {
  return (
    <div className="intro">
      {isMobile() ? (
        <p className="intro__text">Выберите интересующую тему новостей</p>
      ) : (
        <p className="intro__text">
          Поводите мышкой по вариантам новостных тем и кликните на интересующий
        </p>
      )}
    </div>
  );
};

export default Intro;
