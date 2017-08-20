import React from 'react';
import glamorous from 'glamorous';
import FontAwesome from 'react-fontawesome';

const sizes = {
  sm: '40',
  md: '70',
  lg: '100'
};

const Button = glamorous.div(
  {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    background: 'transparent',
    transition:
      '.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    '&:hover, &:focus': {
      cursor: 'pointer',
      transform: 'scale(1.1)',
      outline: '0'
    }
    // ':focus': {
    //   outline: '0'
    // }
  },
  ({ size = 'md', dark = false }) => ({
    width: sizes[size] || size,
    height: sizes[size] || size,
    fontSize: `${(sizes[size] || size) / 2}px`,
    color: dark ? '#292929' : '#ffffff',
    border: `1px solid ${dark ? '#292929' : '#ffffff'}`,
    '&:hover, &:focus': {
      backgroundColor: dark ? '#ffffff' : '#000000',
      borderColor: dark ? '#ffffff' : '#000000'
      // color: dark ? '#292929' : '#ffffff'
    }
  })
);

export default function CircleButton(props) {
  return (
    <Button
      className={`${props.className} test`}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onTouchStart={props.onTouchStart}
      onTouchEnd={props.onTouchEnd}
      dark={props.dark}
      size={props.size}
    >
      <span>{props.hover}</span>
      {props.icon
        ? <FontAwesome
            name={props.icon}
            flip={props.flip}
          />
        : props.children}
    </Button>
  );
}
