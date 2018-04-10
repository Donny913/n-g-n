import STORE_CONSTANTS from '../../../constants/storeConstants';

const topic = (state = null, action) => {
  switch (action.type) {
    case STORE_CONSTANTS.CHANGE_TOPIC:
      return action.topic;
    case STORE_CONSTANTS.RESET_TOPIC:
      return null;
    default:
      return state;
  }
};

const appIsRunning = (state = false, action) => {
  if (action.type === STORE_CONSTANTS.CHANGE_APP_STATUS) {
    return action.status;
  }
  return state;
};

const isMobile = (state = false) => state;

export { appIsRunning, topic, isMobile };
