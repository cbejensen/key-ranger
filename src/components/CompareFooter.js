import React from 'react';
import glamorous from 'glamorous';

export default function CompareFooter(props) {
  const Row = glamorous.div({
    display: 'flex'
  });
  const Col = glamorous.div(
    {
      flex: '1',
      padding: '10px'
    },
    ({ textAlign = 'center' }) => ({
      textAlign: textAlign
    })
  );
  return (
    <Row>
      <Col textAlign="left">back</Col>
      <Col>4/10</Col>
      <Col textAlign="right">settings</Col>
    </Row>
  );
}
