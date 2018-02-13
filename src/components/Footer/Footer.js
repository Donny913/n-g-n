import React from 'react';
import PropTypes from 'prop-types';
import formsActions from '../../actions/formsActions';

const Footer = () => {
  const onClick = () => {
    formsActions.initForm({ formId: 'contacts' });
  };
  return (
    <div className="footer">
      <p onClick={onClick} className="contacts">
        Contacts
      </p>
    </div>
  );
};

Footer.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Footer;
