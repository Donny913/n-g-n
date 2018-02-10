import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TextButton from '../../Buttons/TextButton';
import { withCloseIcon } from '../ModalFormUnits';

const NewsDescriptionForm = ({ closeForm, news, currentNewsIndex }) => {
  const newsItem = news[currentNewsIndex];
  return (
    <div className="center column">
      <p className="news-item__description">{newsItem.description}</p>
      <a href={newsItem.link} target="_blank" rel="noopener noreferrer">
        источник
      </a>
      <TextButton type="news-item" onClick={closeForm} label="Ok" />
    </div>
  );
};

NewsDescriptionForm.propTypes = {
  closeForm: PropTypes.func.isRequired,
  news: PropTypes.array.isRequired,
  currentNewsIndex: PropTypes.number.isRequired
};

export default connect(({ news, currentNewsIndex }) => ({
  news,
  currentNewsIndex
}))(withCloseIcon(NewsDescriptionForm));
