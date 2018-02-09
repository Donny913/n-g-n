import STORE_CONSTANTS from '../../../constants/storeConstants';

const forms = (state = null, action) => {
  switch (action.type) {
    case STORE_CONSTANTS.FORM_INIT:
      return {
        formId: action.formId
      };
    case STORE_CONSTANTS.FORM_CLOSE:
      return null;
    default:
      return state;
  }
};
export { forms };
