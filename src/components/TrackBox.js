import React from 'react';
import glamorous from 'glamorous';
import CircleButton from 'components/CircleButton';

export default function TrackBox(props) {
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
    textDecoration: 'underline'
  });
  const TrackNumber = glamorous.div({
    fontSize: '4em',
    flex: '1'
  });
  const PlayButton = glamorous.div({
    flex: '3',
    display: 'flex',
    alignItems: 'center'
  });
  return (
    <Box>
      <Title>Track</Title>
      <TrackNumber>{props.num}</TrackNumber>
      <PlayButton>
        <CircleButton size="lg" dark icon="play" />
      </PlayButton>
    </Box>
  );
}
