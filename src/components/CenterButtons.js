import React from 'react';
import CircleButton from 'components/CircleButton';
import glamorous from 'glamorous';

export default function CenterButtons(props) {
  const Container = glamorous.div({
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 175,
    '& .filler': {
      borderRight: '1px solid white',
      margin: 7,
      flex: 1,
      '@media(max-height: 470px)': {
        margin: 0
      }
    },
    '& .first': {
      marginTop: 0
    },
    '& .last': {
      border: 'none'
    }
  });
  return (
    <Container>
      <div className="filler first" />
      <CircleButton size="sm">
        &lt;&gt;
      </CircleButton>
      <div className="filler" />
      <CircleButton size="md" style={{ fontSize: '2em' }}>
        =
      </CircleButton>
      <div className="filler" />
      <CircleButton icon="forward" size="sm" />
      <div className="filler last" />
    </Container>
  );
}
