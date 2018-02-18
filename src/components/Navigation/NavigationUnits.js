import React from 'react';
import TextButton from '../Buttons/TextButton';

import formsActions from '../../actions/formsActions';
import appActions from '../../actions/appActions';

const ReadMore = () => {
  const readMore = () => {
    appActions.changeAppStatus(false);
    formsActions.initForm({
      formId: 'newsDescription'
    });
  };
  return (
    <div className="center">
      <TextButton onClick={readMore} label="Read more" />
    </div>
  );
};

export { ReadMore };
