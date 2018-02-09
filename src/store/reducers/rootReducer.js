import { combineReducers } from 'redux';
import { forms } from './forms/forms';
import { topic } from './topic/topic';
import { news, currentNewsIndex } from './news/news';

const rootReducer = combineReducers({
  topic,
  forms,
  news,
  currentNewsIndex
});

export default rootReducer;
