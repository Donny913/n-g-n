import React from 'react';
import PropTypes from 'prop-types';

import closeIcon from '../../images/icons/close_icon.png';

const CloseIcon = ({ onClick }) => {
  return (
    <div className="close-icon-wrapper">
      <img className="close-icon" onClick={onClick} src={closeIcon} alt="" />
    </div>
  );
};

const withCloseIcon = WrappedComponent => {
  const FormWithCloseIcon = ({ config, ...restProps }) => (
    <div className={config && config.wrapperClassName}>
      <CloseIcon onClick={restProps.closeForm} />
      <WrappedComponent {...restProps} />
    </div>
  );

  FormWithCloseIcon.propTypes = {
    closeForm: PropTypes.func.isRequired,
    config: PropTypes.object.isRequired
  };

  return FormWithCloseIcon;
};

CloseIcon.propTypes = {
  onClick: PropTypes.func.isRequired
};

export { CloseIcon, withCloseIcon };
