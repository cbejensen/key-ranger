import React from 'react';
import { CircleButton as Button } from 'components/glamorous';
import FontAwesome from 'react-fontawesome';

export default function CircleButton(props) {
  return (
    <Button
      onClick={props.onClick}
      dark={props.dark}
      size={props.size}
    >
      <span>
        {props.icon
          ? <FontAwesome
              name={props.icon}
              flip={props.flip}
            />
          : props.children}
      </span>
    </Button>
  );
}
