/* eslint-disable no-restricted-globals */
import React from 'react';

import { withCloseIcon } from '../ModalFormUnits';

const ApiError = () => {
  const onClick = () => location.reload();
  return (
    <div className="">
      <p className="">К сожалению, возникла ошибка с загрузкой новостей на эту тему. Попробуйте выбрать другую тему.</p>
      <p className="inline-button" onClick={onClick}>Перезагрузить страницу</p>
    </div>
  );
};

export default withCloseIcon(ApiError);
