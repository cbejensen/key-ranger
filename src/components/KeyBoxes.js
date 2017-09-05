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
  const Box = glamorous(KeyBox)({
    paddingTop: '15px',
    flex: '1'
  });
  return (
    <Boxes>
      <Box keyNum={1} />
      <Box keyNum={2} />
    </Boxes>
  );
}
