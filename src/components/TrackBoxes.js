import React from 'react';
import glamorous from 'glamorous';
import TrackBox from './TrackBox';

export default function TrackBoxes(props) {
  const Boxes = glamorous.div(
    {
      display: 'flex'
    },
    props.style
  );
  const box = {
    paddingTop: '15px',
    flex: '1'
  };
  return (
    <Boxes>
      <TrackBox
        num={1}
        css={{
          ...box,
          borderRight: '1px solid white'
        }}
      />
      <TrackBox num={2} css={box} />
    </Boxes>
  );
}
