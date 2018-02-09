import STORE_CONSTANTS from '../../../constants/storeConstants';

const news = (state = [], action) => {
  switch (action.type) {
    case STORE_CONSTANTS.NEWS_INIT:
      return action.news;
    default:
      return state;
  }
};

const currentNewsIndex = (state = 0, action) => {
  switch (action.type) {
    case STORE_CONSTANTS.CHANGE_NEWS_INDEX:
      return action.index;
    default:
      return state;
  }
};

export { news, currentNewsIndex };
