import React from 'react';
import PropTypes from 'prop-types';

import closeIcon from '../../images/icons/close_icon.png';

const CloseIcon = ({ onClick }) => {
  return (
    <div className="close-icon-wrapper">
      <img onClick={onClick} src={closeIcon} alt="" />
    </div>
  );
};

CloseIcon.propTypes = {
  onClick: PropTypes.func.isRequired
};

export { CloseIcon };
