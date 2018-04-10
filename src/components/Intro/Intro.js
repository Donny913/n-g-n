import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Intro = ({ isMobile }) => {
  return (
    <div className="intro">
      {isMobile ? (
        <p className="intro__text">Выберите интересующую тему новостей</p>
      ) : (
        <p className="intro__text">
          Поводите мышкой по вариантам новостных тем и кликните на интересующую
        </p>
      )}
    </div>
  );
};

Intro.propTypes = {
  isMobile: PropTypes.bool.isRequired
};

export default connect(({ isMobile }) => ({ isMobile }))(Intro);
