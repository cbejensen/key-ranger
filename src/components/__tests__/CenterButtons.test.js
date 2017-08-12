import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import CenterButtons from '../CenterButtons';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CenterButtons />, div);
});
