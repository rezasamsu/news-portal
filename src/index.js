import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App/App.component';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
