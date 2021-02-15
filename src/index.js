import React from 'react';
import ReactDOM from 'react-dom';

// -- Redux
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store/store'

import './styles/index.css';

// Redux Store Log
window.store = store;

// NB: Get store state :
//store.getState()

import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
