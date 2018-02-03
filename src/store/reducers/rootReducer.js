import { combineReducers } from 'redux';
import CONSTANTS from '../../constants/storeConstants';

const topic = (state = null, action) => {
  switch (action.type) {
    case CONSTANTS.CHANGE_TOPIC:
      return action.topic;
    default:
      return state;
  }
};

const modalForm = (state = null, action) => {
  switch (action.type) {
    case CONSTANTS.FORM_INIT:
      return {
        formId: action.formId
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  topic,
  modalForm
});

export default rootReducer;
