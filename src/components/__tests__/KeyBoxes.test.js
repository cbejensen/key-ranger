import React from 'react';
import ReactDOM from 'react-dom';
import KeyBoxes from '../KeyBoxes';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<KeyBoxes />, div);
});
