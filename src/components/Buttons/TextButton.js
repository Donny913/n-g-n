import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const TextButton = ({ label, onClick }) => {
  return <Button onClick={onClick} label={label} />;
};

TextButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

TextButton.defaultProps = { onClick: null };

export default TextButton;
