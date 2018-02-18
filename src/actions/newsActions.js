import { dispatch, getState } from '../store/store';
import STORE_CONSTANTS from '../constants/storeConstants';

// TODO remove test values

const testNews = [
  {
    title: 'Первая новость',
    description:
      'Национальная разведка США: Москва будет пытаться испортить любое потепление между Минском и Западом',
    link: 'http://google.com'
  },
  {
    title: 'Вторая новость',
    description:
      'Ермошина о том, почему надо идти на выборы: любовь к Родине — любовь не только к мове и вышиванке',
    link: 'google.com'
  },
  {
    title: 'Третья новость',
    description: 'Беларусбанк открыл первый Ипотечный офис',
    link: 'google.com'
  }
];

const newsInit = async topic => {
  dispatch({ type: STORE_CONSTANTS.SET_NEWS, news: testNews });
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
  const { currentNewsIndex, news: { length } } = getState();
  const newIndex = currentNewsIndex < length - 1 ? currentNewsIndex + 1 : 0;
  changeNewsIndex(newIndex);
};

const getPrevNewsItem = async () => {
  const { currentNewsIndex, news: { length } } = getState();
  const newIndex = currentNewsIndex !== 0 ? currentNewsIndex - 1 : length - 1;
  changeNewsIndex(newIndex);
};

export default { newsInit, resetNews, getPrevNewsItem, getNextNewsItem };
