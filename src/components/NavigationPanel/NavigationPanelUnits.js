import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

const NavigationButton = ({ label }) => {
  const navigationButtonLabel = <i className="material-icons">{label}</i>;
  return <Button type="navigation" label={navigationButtonLabel} />;
};

NavigationButton.propTypes = {
  label: PropTypes.string.isRequired
};

export { NavigationButton };
