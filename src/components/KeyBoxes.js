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
    flex: '1',
    position: 'relative'
  });
  const BoxWithBorder = glamorous(Box)({
    borderRight: '1px solid #fff'
  });
  return (
    <Boxes>
      <BoxWithBorder keyNum={1} />
      <Box keyNum={2} />
    </Boxes>
  );
}
