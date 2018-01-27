import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';

import FirstWindow from './FirstWindow/FirstWindow';

const App = () => {
  return (
    <Provider store={store}>
      <FirstWindow />
    </Provider>
  );
};

export default App;
