import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NavigationButton from '../Buttons/NavigationButton';
import TextButton from '../Buttons/TextButton';

import appActions from '../../actions/appActions';
import newsActions from '../../actions/newsActions';

const NavigationPanel = ({ appIsRunning }) => {
  const toggleAppStatus = () => {
    appActions.toggleAppStatus(appIsRunning);
  };

  const getNextNews = () => {
    newsActions.getNextNewsItem();
    if (!appIsRunning) {
      appActions.changeAppStatus(true);
    }
  };
  const getPrevNews = () => {
    newsActions.getPrevNewsItem();
    if (!appIsRunning) {
      appActions.changeAppStatus(true);
    }
  };

  const appCancel = () => {
    appActions.appCancell();
  };

  return (
    <div className="navigation-panel">
      <NavigationButton onClick={getPrevNews} label="skip_previous" />
      <NavigationButton
        onClick={toggleAppStatus}
        label={appIsRunning ? 'pause' : 'play_arrow'}
      />
      <NavigationButton onClick={getNextNews} label="skip_next" />
      <TextButton onClick={appCancel} label="Main menu" />
    </div>
  );
};

NavigationPanel.propTypes = {
  appIsRunning: PropTypes.bool.isRequired
};

export default connect(({ appIsRunning }) => ({ appIsRunning }))(
  NavigationPanel
);
