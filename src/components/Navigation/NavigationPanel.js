import React from 'react';
import PropTypes from 'prop-types';

import NavigationButton from '../Buttons/NavigationButton';
import TextButton from '../Buttons/TextButton';

import appActions from '../../actions/appActions';
import newsActions from '../../actions/newsActions';

const NavigationPanel = ({ appIsRunning }) => {
  const onClick = () => {
    console.log('clicked');
  };

  const toggleAppStatus = () => {
    appActions.toggleAppStatus(appIsRunning);
  };

  const getNextNews = () => {
    newsActions.getNextNewsItem();
  };
  const getPrevNews = () => {
    newsActions.getPrevNewsItem();
  };

  return (
    <div className="navigation-panel">
      <NavigationButton onClick={getPrevNews} label="skip_previous" />
      <NavigationButton
        onClick={toggleAppStatus}
        label={appIsRunning ? 'pause' : 'play_arrow'}
      />
      <NavigationButton onClick={getNextNews} label="skip_next" />
      <TextButton onClick={onClick} label="Main menu" />
    </div>
  );
};

NavigationPanel.propTypes = {
  appIsRunning: PropTypes.bool.isRequired
};

export default NavigationPanel;
