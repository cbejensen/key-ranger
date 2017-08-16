import React from 'react';
import glamorous from 'glamorous';
import CircleButton from 'components/CircleButton';
import CenterButtons from 'components/CenterButtons';

export default function KeyButtons(props) {
  const Container = glamorous.div(
    {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative'
    },
    props.style
  );
  const Button = glamorous.div(
    {
      position: 'absolute',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    },
    ({ left = '50%' }) => ({
      left: left
    })
  );
  return (
    <Container>
      <Button left="25%">
        <CircleButton
          icon="thumbs-up"
          size="80"
          flip="horizontal"
        />
      </Button>
      <Button left="75%">
        <CircleButton icon="thumbs-up" size="80" />
      </Button>
      <CenterButtons />
    </Container>
  );
}
