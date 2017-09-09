import React from 'react';
import glamorous from 'glamorous';
import { PlayButton } from 'containers/ConnectKeyPlaying';

export default function KeyBox(props) {
  const mediaHeightBreakpoint = '@media(max-height:450px)';
  const Box = glamorous.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '10px'
  });
  const Title = glamorous.div({
    fontSize: '1.2em',
    padding: '10px 0',
    textTransform: 'uppercase',
    borderBottom: '1px solid #292929',
    [mediaHeightBreakpoint]: {
      display: 'none'
    }
  });
  const KeyNumber = glamorous.div(
    {
      fontSize: '4em',
      display: 'block',
      [mediaHeightBreakpoint]: {
        position: 'absolute',
        fontSize: '2em'
      }
    },
    ({ keyNum = 1 }) => ({
      [mediaHeightBreakpoint]: {
        left: keyNum === 1 ? 'inherit' : '0',
        right: keyNum === 1 ? '0' : 'inherit',
        [keyNum === 1
          ? 'paddingRight'
          : 'paddingLeft']: '10px'
      }
    })
  );
  const ButtonContainer = glamorous.div({
    flex: '1',
    display: 'flex',
    alignItems: 'center'
  });
  return (
    <Box className={props.className}>
      <Title>
        Key
      </Title>
      <KeyNumber keyNum={props.keyNum}>
        {props.keyNum}
      </KeyNumber>
      <ButtonContainer>
        <PlayButton size="lg" dark keyNum={props.keyNum} />
      </ButtonContainer>
    </Box>
  );
}
