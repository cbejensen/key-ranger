import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from 'components/Loading';

const Main = Loadable({
  loader: () => import('./routes/Main'),
  loading: Loading
});
const Compare = Loadable({
  loader: () => import('./routes/Compare'),
  loading: Loading
});

export default function App(props) {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Compare} />
        <Route path="/compare" component={Compare} />
      </div>
    </Router>
  );
}
