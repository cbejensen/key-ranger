import React from 'react';
import glamorous from 'glamorous';
import { PlayButton } from 'containers/PlayButton';

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
    textTransform: 'uppercase'
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
    <Box>
      <Title>Key</Title>
      <KeyNumber>{props.keyNum}</KeyNumber>
      <ButtonContainer>
        <PlayButton size="lg" dark keyNum={props.keyNum} />
      </ButtonContainer>
    </Box>
  );
}
