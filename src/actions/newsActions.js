import { dispatch } from '../store/store';
import STORE_CONSTANTS from '../constants/storeConstants';

const newsInit = async news => {
  dispatch({ type: STORE_CONSTANTS.NEWS_INIT, news });
};

export default { newsInit };
