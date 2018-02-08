import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, label, type }) => {
  const getClassName = () => {
    const modifikator = type === 'navigation' ? 'button--navigation' : '';
    return `button ${modifikator}`;
  };

  return (
    <button className={getClassName()} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string
};

Button.defaultProps = {
  type: null
};

export default Button;
