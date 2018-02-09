import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const TextButton = ({ label, onClick, type }) => {
  return <Button onClick={onClick} label={label} type={type} />;
};

TextButton.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func
};

TextButton.defaultProps = { onClick: null, type: null };

export default TextButton;
