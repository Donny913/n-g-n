import { dispatch } from '../store/store';
import CONSTANTS from '../constants/storeConstants';

const closeForm = async formId => {
  dispatch({ type: CONSTANTS.FORM_CLOSE, formId });
};

const initForm = async formId => {
  dispatch({ type: CONSTANTS.FORM_INIT, formId });
};

export default { closeForm, initForm };
