import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import TrackBox from '../TrackBox';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TrackBox />, div);
});
