import React, { Fragment } from 'react';
import { Provider, connect } from 'react-redux';

import { store } from '../store/store';

import FirstWindow from './FirstWindow/FirstWindow';
import SecondWindow from './SecondWindow/SecondWindow';
import ModalForm from './ModalForm/ModalForm';

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
