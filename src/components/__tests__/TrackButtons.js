import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import KeyButtons from '../KeyButtons';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<KeyButtons />, div);
});
