import React from 'react';
import PropTypes from 'prop-types';

import NavigationButton from '../Buttons/NavigationButton';
import TextButton from '../Buttons/TextButton';

const NavigationPanel = () => {
  const onClick = () => {
    console.log('clicked');
  };

  return (
    <div className="navigation-panel">
      <NavigationButton onClick={onClick} label="skip_previous" />
      <NavigationButton onClick={onClick} label="skip_next" />
      <NavigationButton onClick={onClick} label="skip_next" />
      <NavigationButton onClick={onClick} label="volume_up" />
      <NavigationButton onClick={onClick} label="volume_down" />
      <TextButton onClick={onClick} label="Main menu" />
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
