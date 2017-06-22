import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { StyleSheet, css } from 'aphrodite';

import styles from './css/index.js';

ReactDOM.render(
	<div className={css(styles.skygradient)}><App /></div>,
	document.getElementById('root')
);
registerServiceWorker();
