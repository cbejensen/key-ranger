import React from 'react';
import Main from './routes/Main';
import Compare from './routes/Compare';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

export default function App(props) {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/compare" component={Compare} />
      </div>
    </Router>
  );
}
