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

const SecondWindow = ({ topic }) => {
  if (topic) {
    return (
      <section className="second-window fadeIn">
        <Background />
        <NavigationPanel />
        <AppTitle />
        <NewsTitle />
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
};

SecondWindow.defaultProps = {
  topic: null,
};

export default connect(({ topic }) => ({
  topic,
}))(SecondWindow);
