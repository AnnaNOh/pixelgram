

import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import Greeting from './App';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <Greeting />
    </HashRouter>
  </Provider>
);

export default Root;
