import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Background from '../../components/Background/Background';
import NavigationPanel from '../../components/Navigation/NavigationPanel';
import AppTitle from '../../components/Titles/AppTitle';
import NewsTitle from '../../components/Titles/NewsTitle';
import { ReadMore } from '../../components/Navigation/NavigationUnits';
import Footer from '../../components/Footer/Footer';

const SecondWindow = ({ topic, news, currentNewsIndex }) => {
  if (topic) {
    return (
      <section className="second-window fadeIn">
        <Background topic={topic} />
        <NavigationPanel />
        <AppTitle />
        <NewsTitle title={news[currentNewsIndex].title} />
        <ReadMore />
        <Footer />
      </section>
    );
  }
  return null;
};

SecondWindow.propTypes = {
  topic: PropTypes.string,
  news: PropTypes.array.isRequired,
  currentNewsIndex: PropTypes.number.isRequired
};

SecondWindow.defaultProps = {
  topic: null
};

export default connect(({ topic, news, currentNewsIndex }) => ({
  topic,
  news,
  currentNewsIndex
}))(SecondWindow);
