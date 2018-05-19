import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cars from './Cars';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Cars />, document.getElementById('root'));
registerServiceWorker();
