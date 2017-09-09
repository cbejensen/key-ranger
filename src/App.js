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
const Vote = Loadable({
  loader: () => import('./routes/Vote'),
  loading: Loading
});

export default function App(props) {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/vote" component={Vote} />
      </div>
    </Router>
  );
}
