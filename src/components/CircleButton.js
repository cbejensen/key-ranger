import React from 'react';
import glamorous from 'glamorous';
import FontAwesome from 'react-fontawesome';

export default function CircleButton(props) {
  const sizes = {
    sm: '40',
    md: '60',
    lg: '80'
  };
  function getSize() {
    return sizes[props.size] || (props.size || '60');
  }
  const CircleButton = glamorous.div(
    {
      position: 'relative',
      color: '#ffffff',
      border: '1px solid #ffffff',
      borderRadius: '100%',
      background: 'transparent',
      width: getSize(),
      height: getSize(),
      transition:
        '.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      ':hover': {
        backgroundColor: '#000000',
        borderColor: '#000000',
        color: '#ffffff',
        cursor: 'pointer',
        transform: 'scale(1.1)'
      }
    },
    props.style
  );
  const styles = {
    centered: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  };
  return (
    <CircleButton>
      <span style={styles.centered}>
        {props.icon
          ? <FontAwesome
              name={props.icon}
              style={styles.icon}
              flip={props.flip}
            />
          : props.children}
      </span>
    </CircleButton>
  );
}
