import React from 'react';
import PropTypes from 'prop-types';
import TextButton from '../Buttons/TextButton';

const ReadMore = ({ onClick }) => (
  <div className="center">
    <TextButton onClick={onClick} label="Read more" />
  </div>
);

ReadMore.propTypes = {
  onClick: PropTypes.func.isRequired
};

export { ReadMore };
