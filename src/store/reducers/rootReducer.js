import { combineReducers } from 'redux';

const chooseTopic = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_TOPIC':
      return action.topic;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  topic: chooseTopic
});

export default rootReducer;
