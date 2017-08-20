import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import keyRangerApp from './reducers.js';
import 'normalize.css';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(
  keyRangerApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
registerServiceWorker();

// var root = document.getElementById('root');
// root.innerHTML = `
//   <button id="btn" style="padding: 20px; border: 3px solid black;">Tap me!</button>
//   <div id="events"></div>
// `;
// var btn = document.querySelector('#btn');
// var eventsElem = document.querySelector('#events');
// btn.addEventListener('mouseenter', logEvent);
// btn.addEventListener('mouseleave', logEvent);
// btn.addEventListener('touchstart', logEvent);
// btn.addEventListener('touchend', logEvent);
// var events = [];
// function logEvent(e) {
//   // events.push(e.type + '<br/>');
//   eventsElem.innerHTML =
//     eventsElem.innerHTML + e.type + '<br />';
// }
