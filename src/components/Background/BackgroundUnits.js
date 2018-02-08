import React from 'react';
import PropTypes from 'prop-types';

const BackgroundSection = ({ src, isHidden }) => {
  return (
    <div className="background-section">
      <div className={isHidden ? 'background-section__image fadeIn ' : 'none'}>
        <img src={src} alt="background-section" />
      </div>
    </div>
  );
};

BackgroundSection.propTypes = {
  src: PropTypes.object.isRequired,
  isHidden: PropTypes.bool
};

BackgroundSection.defaultProps = {
  isHidden: false
};

export { BackgroundSection };
