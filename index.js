/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Provider} from 'react-redux';
import myReducer from './src/redux/reducer';
import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {watchAgeUp} from './src/sagas/saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(myReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchAgeUp);

const reduxApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => reduxApp);
