import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import { store } from '../store/store';

import FirstWindow from '../windows/FirstWindow/FirstWindow';
import SecondWindow from '../windows/SecondWindow/SecondWindow';
import ModalForm from '../components/ModalForm/ModalForm';

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <FirstWindow />
        <SecondWindow />
        <ModalForm />
      </Fragment>
    </Provider>
  );
};

export default App;
