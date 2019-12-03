import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from "./themes/cokiTheme";
import App from './components/App';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();