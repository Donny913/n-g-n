import React from 'react';
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

export default Footer;
