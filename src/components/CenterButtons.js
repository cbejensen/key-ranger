import React from 'react';
import CircleButton from 'components/CircleButton';
import { KeySwitcher } from 'containers/ConnectKeyPlaying';
import glamorous from 'glamorous';
import FontAwesome from 'react-fontawesome';

export default function CenterButtons(props) {
  const Container = glamorous.div({
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '200px',
    '& .filler': {
      borderRight: '1px solid white',
      margin: '7px',
      flex: 1,
      '@media(max-height: 550px)': {
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
  const EqualsSign = glamorous.span({
    display: 'block',
    borderWidth: '5px 0',
    borderStyle: 'solid',
    borderColor: '#fff',
    width: '30px',
    height: '10px'
  });
  return (
    <Container>
      <div className="filler first" />
      <KeySwitcher />
      <div className="filler" />
      <CircleButton size="md">
        <EqualsSign />
      </CircleButton>
      <div className="filler" />
      <CircleButton icon="forward" size="sm" />
      <div className="filler last" />
    </Container>
  );
}
