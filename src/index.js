import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/common.less';
import './static/font/iconfont.css';
import RouterMap from './routermap/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouterMap />, document.getElementById('root'));
registerServiceWorker();
