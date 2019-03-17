import React from 'react';
import { Provider } from 'react-redux';
import SagaRoot from './SagaRoot';
import ReducerRoot from './ReducerRoot';
import AppReduxStore from './AppReduxStore';

const withReduxBoot = Component => props => {
  // create redux store and saga middleware
  const { store, middleware } = AppReduxStore(ReducerRoot);

  // start saga middleware
  middleware.run(SagaRoot);

  // wrap component by redux
  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
};

export default withReduxBoot;
