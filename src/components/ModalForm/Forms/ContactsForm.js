import React from 'react';

import { withCloseIcon } from '../ModalFormUnits';

const ContactsForm = () => {
  return (
    <div className="contacts-form">
      <p className="contacts-form__info-text">oleg.miniuk@gmail.com</p>
    </div>
  );
};

export default withCloseIcon(ContactsForm);
