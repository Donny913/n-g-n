import React from 'react';
import PropTypes from 'prop-types';
import TextButton from '../Buttons/TextButton';

import formsActions from '../../actions/formsActions';

const ReadMore = () => {
  const readMore = () => {
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

ReadMore.propTypes = {
  onClick: PropTypes.func.isRequired
};

export { ReadMore };
