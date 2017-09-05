import React from 'react';
import glamorous from 'glamorous';

const Line = glamorous.div({
  transition: '2s',
  transform: 'rotate(180deg)',
  transformOrigin: 'bottom',
  borderRight: '1px solid black',
  width: '0',
  margin: 'auto'
});

export default function AppWrapper(props) {
  return <Line />;
}
