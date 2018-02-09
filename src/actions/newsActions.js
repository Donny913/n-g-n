import { store, dispatch } from '../store/store';
import STORE_CONSTANTS from '../constants/storeConstants';

let defStore;
let nextStore;

const newsInit = async news => {
  defStore = store.getState();
  console.log(defStore);
  dispatch({ type: STORE_CONSTANTS.NEWS_INIT, news });
  // dispatch({ type: STORE_CONSTANTS.CHANGE_TOPIC, topic: 'testForm' });
  nextStore = store.getState();
  console.log(nextStore);
  console.log(Object.is(defStore, nextStore));
};

export default { newsInit };
