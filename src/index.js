import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/store";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)
