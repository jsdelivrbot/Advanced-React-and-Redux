import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Signin from './components/auth/Signin';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Route path="/" component={App}/>
                <Route path="/signin" component={Signin}/>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));
