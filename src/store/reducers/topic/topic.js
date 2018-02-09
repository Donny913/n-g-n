import STORE_CONSTANTS from '../../../constants/storeConstants';

const topic = (state = null, action) => {
  switch (action.type) {
    case STORE_CONSTANTS.CHANGE_TOPIC:
      return action.topic;
    default:
      return state;
  }
};

export { topic };
