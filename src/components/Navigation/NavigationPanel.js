import React from 'react';

import NavigationButton from '../Buttons/NavigationButton';
import TextButton from '../Buttons/TextButton';

import formsActions from '../../actions/formsActions';

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

export default NavigationPanel;
