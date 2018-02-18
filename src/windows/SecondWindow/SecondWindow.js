import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Background from '../../components/Background/Background';
import NavigationPanel from '../../components/Navigation/NavigationPanel';
import AppTitle from '../../components/Titles/AppTitle';
import NewsTitle from '../../components/Titles/NewsTitle';
import { ReadMore } from '../../components/Navigation/NavigationUnits';
import Audio from '../../components/Audio/Audio';
import Footer from '../../components/Footer/Footer';

const SecondWindow = ({ topic, currentNewsTitle, appIsRunning }) => {
  if (topic) {
    return (
      <section className="second-window fadeIn">
        <Background topic={topic} />
        <NavigationPanel appIsRunning={appIsRunning} />
        <AppTitle />
        <NewsTitle title={currentNewsTitle} />
        <ReadMore />
        <Footer />
        <Audio />
      </section>
    );
  }
  return null;
};

SecondWindow.propTypes = {
  topic: PropTypes.string,
  currentNewsTitle: PropTypes.string,
  appIsRunning: PropTypes.bool.isRequired
};

SecondWindow.defaultProps = {
  topic: null,
  currentNewsTitle: null
};

export default connect(({ topic, news, currentNewsIndex, appIsRunning }) => ({
  topic,
  currentNewsTitle: news[currentNewsIndex] && news[currentNewsIndex].title,
  appIsRunning
}))(SecondWindow);
