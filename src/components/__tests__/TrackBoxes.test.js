import React from 'react';
import ReactDOM from 'react-dom';
import TrackBoxes from '../TrackBoxes';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TrackBoxes />, div);
});
