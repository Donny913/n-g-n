import React from 'react';
import PropTypes from 'prop-types';

import { NavigationButton } from './NavigationPanelUnits';

const NavigationPanel = () => {
  return (
    <div className="center">
      <NavigationButton label="skip_previous" />
      <NavigationButton label="skip_next" />
      <NavigationButton label="skip_next" />
      <NavigationButton label="volume_up" />
      <NavigationButton label="volume_down" />
      <NavigationButton label="Main Menu" />
    </div>
  );
};

NavigationPanel.propTypes = {
  topic: PropTypes.string
};

NavigationPanel.defaultProps = {
  topic: null
};

export default NavigationPanel;
