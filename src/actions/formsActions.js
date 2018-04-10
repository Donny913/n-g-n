import { dispatch } from '../store/store';
import STORE_CONSTANTS from '../constants/storeConstants';

const closeForm = async formId => {
  dispatch({ type: STORE_CONSTANTS.FORM_CLOSE, formId });
};

const initForm = async ({ formId }) => {
  dispatch({ type: STORE_CONSTANTS.FORM_INIT, formId });
};

const initErrorForm = async () => {
  initForm({ formId: 'apiError' });
};

export default { closeForm, initForm, initErrorForm };
