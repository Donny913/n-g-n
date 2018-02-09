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

const forms = (state = null, action) => {
  switch (action.type) {
    case CONSTANTS.FORM_INIT:
      return {
        formId: action.formId
      };
    case CONSTANTS.FORM_CLOSE:
      return null;
    default:
      return state;
  }
};

// const news = (state = [], )

const rootReducer = combineReducers({
  topic,
  forms
});
// const rootReducer = (state = {}, action) => {
//   return {
//     topic: topic(state.topic, action),
//     forms: (state.forms, action)
//   };
// };

export default rootReducer;
