import { combineReducers } from 'redux';
import { forms } from './forms/forms';
import { news, currentNewsIndex } from './news/news';
import { topic, appIsRunning } from './app/app';

const rootReducer = combineReducers({
  topic,
  forms,
  news,
  currentNewsIndex,
  appIsRunning
});

export default rootReducer;
