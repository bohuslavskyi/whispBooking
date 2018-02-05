import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';

import reducers from './reducers';
import ReduxPromise from 'redux-promise';
import  ReduxThunk from 'redux-thunk';

import './styles/index.scss';

registerServiceWorker();

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(createStore);


const render = AppComponent => {
    ReactDOM.render(
                <Provider store={createStoreWithMiddleware(reducers)}>
                    <AppComponent/>
                </Provider>,
                document.getElementById('root')
            );
};

render(App);

// This is a workaround to HMR support because babel-plugin-dva-hmr is not available with create-react-app
if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NextApp = require('./components/App').default;
        render(NextApp);
    });
}
