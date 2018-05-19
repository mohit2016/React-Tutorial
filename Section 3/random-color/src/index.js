import React from 'react';
import ReactDOM from 'react-dom';
import RandomBox from './RandomBox';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RandomBox />, document.getElementById('root'));
registerServiceWorker();
