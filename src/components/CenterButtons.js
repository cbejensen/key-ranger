import React from 'react';
import CircleButton from 'components/CircleButton';
import { KeySwitcher } from 'containers/ConnectKeyPlaying';
import glamorous from 'glamorous';

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
  const EqualsSign = glamorous.div(
    {
      borderWidth: '3px 0',
      borderStyle: 'solid',
      borderColor: '#fff'
    },
    ({ size = '15px' }) => {
      const val = parseInt(size, 10); // get numbers
      const unit = size.replace(/[0-9]/g, ''); // get letters
      return {
        width: `${val}${unit || 'px'}`,
        height: `${parseInt(val / 3, 10)}${unit || 'px'}`
      };
    }
  );
  return (
    <Container>
      <div className="filler first" />
      <KeySwitcher />
      <div className="filler" />
      <CircleButton size="md" style={{ fontSize: '2em' }}>
        <EqualsSign size="25px" />
      </CircleButton>
      <div className="filler" />
      <CircleButton icon="forward" size="sm" />
      <div className="filler last" />
    </Container>
  );
}
