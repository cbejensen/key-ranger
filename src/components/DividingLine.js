import React from 'react';
import glamorous from 'glamorous';

const Container = glamorous.div({
  width: '100vw',
  height: '50vh',
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center'
});

const Line = glamorous.div({
  width: '1px',
  height: '100%',
  backgroundColor: '#ffffff'
});

export default function DividingLine(props) {
  return (
    <Container>
      <Line />
    </Container>
  );
}
