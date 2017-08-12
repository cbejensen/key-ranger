import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Loading from '../Loading';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Loading />, div);
});
