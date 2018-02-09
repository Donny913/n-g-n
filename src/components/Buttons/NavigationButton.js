import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const NavigationButton = ({ label, onClick }) => {
  const navigationButtonLabel = <i className="material-icons">{label}</i>;
  return (
    <Button onClick={onClick} type="navigation" label={navigationButtonLabel} />
  );
};

NavigationButton.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  onClick: PropTypes.func
};

NavigationButton.defaultProps = {
  onClick: null
};

export default NavigationButton;
