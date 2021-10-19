import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/store";

ReactDOM.render(
    //When using BrowserRouter on github pages there's a bug with page refreshing
    //Used HashRouter instead
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>,
    document.getElementById('root')
)
