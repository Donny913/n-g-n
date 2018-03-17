import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TextButton from '../../Buttons/TextButton';
import { withCloseIcon } from '../ModalFormUnits';

const NewsDescriptionForm = ({ closeForm, currentNews }) => {
  return (
    <div className="center column">
      <p className="news-item__description">{currentNews.description[0]}</p>
      <a href={currentNews.link} target="_blank" rel="noopener noreferrer">
        источник
      </a>
      <TextButton type="news-item" onClick={closeForm} label="Ok" />
    </div>
  );
};

NewsDescriptionForm.propTypes = {
  closeForm: PropTypes.func.isRequired,
  currentNews: PropTypes.object.isRequired
};

export default connect(({ news, currentNewsIndex }) => ({
  news,
  currentNews: news[currentNewsIndex]
}))(withCloseIcon(NewsDescriptionForm));
