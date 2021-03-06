import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-table/react-table.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import makeMainRoutes from './lib/routes';

const routes = makeMainRoutes();

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
