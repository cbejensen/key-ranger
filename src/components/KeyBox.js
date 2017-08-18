import React from 'react';
import glamorous from 'glamorous';
import CircleButton from 'components/CircleButton';

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
    fontSize: '4em',
    flex: '1'
  });
  const PlayButton = glamorous(CircleButton)(
    {
      flex: '3',
      display: 'flex',
      alignItems: 'center'
    },
    ({ playing }) => ({
      background: playing ? '#fffffff' : 'transparent',
      borderColor: playing ? '#ffffff' : '#292929'
    })
  );
  return (
    <Box>
      <Title>Key</Title>
      <KeyNumber>{props.num}</KeyNumber>
      <PlayButton
        onClick={() => {
          console.log('test');
          props.onClick(props.num);
        }}
        size="lg"
        dark
        icon={
          props.playing === props.num ? 'pause' : 'play'
        }
      />
    </Box>
  );
}
