import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../Button/Button';
import { CloseIcon } from '../ModalFormUnits';

const MobileWarningForm = ({ closeForm }) => {
  return (
    <div className="fadeIn mobile-warning-form">
      <CloseIcon onClick={closeForm} />
      <div>
        <p>
          Еще не все мобильные браузеры поодерживают технологию голосового
          воспроизведения{' '}
          <span className="mobile-warning-form__info-text">
            (Web Speech API).
          </span>
        </p>
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

export default MobileWarningForm;
