import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { StyleSheet, css } from 'aphrodite';

import styles from './css/index.js';
import './index.css';

ReactDOM.render(
    <div className={css(styles.skygradient)}><App/></div>, document.getElementById('root'));
registerServiceWorker();
