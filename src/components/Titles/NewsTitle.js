import React from 'react';
import PropTypes from 'prop-types';

const NewsTitle = ({ title }) => (
  <h2 className="news-title">
    <i>{title}</i>
  </h2>
);

NewsTitle.propTypes = {
  title: PropTypes.string
};

NewsTitle.defaultProps = {
  title: null
};

export default NewsTitle;
