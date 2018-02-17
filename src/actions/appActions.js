import { dispatch } from '../store/store';
import STORE_CONSTANTS from '../constants/storeConstants';
import newsActions from './newsActions';

const changeAppStatus = async status => {
  dispatch({ type: STORE_CONSTANTS.CHANGE_APP_STATUS, status });
};
const changeTopic = async id => {
  dispatch({ type: STORE_CONSTANTS.CHANGE_TOPIC, topic: id });
};

const toggleAppStatus = async appIsRunning => {
  if (appIsRunning) {
    changeAppStatus(false);
  } else {
    changeAppStatus(true);
  }
};

const appInit = async topic => {
  Promise.all([
    changeTopic(topic),
    newsActions.newsInit(topic),
    changeAppStatus(true)
  ]);
};

export default { changeTopic, changeAppStatus, toggleAppStatus, appInit };
