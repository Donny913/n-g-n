import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const NewsTitle = ({ currentNewsTitle }) => (
  <h2 className="news-title">
    <i>{currentNewsTitle}</i>
  </h2>
);

NewsTitle.propTypes = {
  currentNewsTitle: PropTypes.string
};

NewsTitle.defaultProps = {
  currentNewsTitle: null
};

export default connect(({ news, currentNewsIndex }) => ({
  currentNewsTitle: news[currentNewsIndex] && news[currentNewsIndex].title
}))(NewsTitle);
