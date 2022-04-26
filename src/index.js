import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

import './Style/Index.scss';


// redux 
import { Provider } from 'react-redux';
import { store } from './Redux/store';




ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
             <App></App>
        </Provider>
    </React.StrictMode> ,
        document.getElementById('root')
);






