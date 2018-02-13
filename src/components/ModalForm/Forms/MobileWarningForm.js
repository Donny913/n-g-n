import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../Buttons/Button';
import { withCloseIcon } from '../ModalFormUnits';

const MobileWarningForm = ({ closeForm }) => {
  return (
    <div>
      <div>
        <p>
          Еще не все мобильные браузеры поодерживают технологию голосового
          воспроизведения
        </p>
        <p className="mobile-warning-form__info-text">(Web Speech API).</p>
        <p>
          Поэтому на Вашем устройстве приложение может работать некорректно.
        </p>
        <p>С компьютора, все работает стабильно.</p>
      </div>
      <div className="center">
        <Button onClick={closeForm} label="Ok" />
      </div>
    </div>
  );
};

MobileWarningForm.propTypes = {
  closeForm: PropTypes.func.isRequired
};

export default withCloseIcon(MobileWarningForm);
