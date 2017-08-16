import React from 'react';
import glamorous from 'glamorous';
import KeyBox from './KeyBox';

export default function KeyBoxes(props) {
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
      <KeyBox
        playing={props.playing}
        onClick={props.onClick}
        num={1}
        css={{
          ...box,
          borderRight: '1px solid white'
        }}
      />
      <KeyBox
        playing={props.playing}
        onClick={props.onClick}
        num={2}
        css={box}
      />
    </Boxes>
  );
}
