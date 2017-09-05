import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import CompareFooter from '../CompareFooter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CompareFooter />, div);
});
