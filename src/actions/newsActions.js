import { dispatch, getState } from '../store/store';
import STORE_CONSTANTS from '../constants/storeConstants';
import httpActions from './httpActions';
import formsActions from './formsActions';
import standUtils from '../utils/standUtils';

const getNewsUrl = topic => {
  const url = `${standUtils.getBasePath()}${standUtils.getApiPath()}/get_news?topic=${topic}`;
  return url;
};

const newsInit = async topic => {
  try {
    const result = await httpActions.get(getNewsUrl(topic));
    dispatch({ type: STORE_CONSTANTS.SET_NEWS, news: result.data });
  } catch (error) {
    formsActions.initForm({ formId: 'apiError' });
  }
};

const resetNews = async () => {
  dispatch({ type: STORE_CONSTANTS.RESET_NEWS });
};

const changeNewsIndex = async newIndex => {
  dispatch({
    type: STORE_CONSTANTS.CHANGE_NEWS_INDEX,
    index: newIndex
  });
};

const getNextNewsItem = async () => {
  const { currentNewsIndex, news } = getState();
  const newIndex =
    currentNewsIndex < news.length - 1 ? currentNewsIndex + 1 : 0;
  changeNewsIndex(newIndex);
};

const getPrevNewsItem = async () => {
  const { currentNewsIndex, news } = getState();
  const newIndex =
    currentNewsIndex !== 0 ? currentNewsIndex - 1 : news.length - 1;
  changeNewsIndex(newIndex);
};

export default { newsInit, resetNews, getPrevNewsItem, getNextNewsItem };
