import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, label, type }) => {
  const getClassName = () => {
    let modifikator;
    switch (type) {
      case 'navigation':
        modifikator = 'button--navigation';
        break;
      case 'news-item':
        modifikator = 'button--news-item';
        break;
      default:
        break;
    }
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
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  type: PropTypes.string
};

Button.defaultProps = {
  type: null
};

export default Button;
