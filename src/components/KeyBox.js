import React from 'react';
import glamorous from 'glamorous';
import { PlayButton } from 'containers/ConnectKeyPlaying';

export default function KeyBox(props) {
  const Box = glamorous.div(
    {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    props.css
  );
  const Title = glamorous.div({
    fontSize: '1.2em',
    textTransform: 'uppercase',
    padding: '0 10px',
    borderBottom: '1px solid #292929'
  });
  const KeyNumber = glamorous.div({
    fontSize: '4em'
  });
  const ButtonContainer = glamorous.div({
    flex: '1',
    display: 'flex',
    alignItems: 'center'
  });
  return (
    <Box className={props.className}>
      <Title>Key</Title>
      <KeyNumber>{props.keyNum}</KeyNumber>
      <ButtonContainer>
        <PlayButton size="lg" dark keyNum={props.keyNum} />
      </ButtonContainer>
    </Box>
  );
}
