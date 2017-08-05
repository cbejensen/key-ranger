import React from 'react';

export default function CircleButton(props) {
  const sizes = {
    sm: '40',
    md: '60',
    lg: '80'
  };
  function getSize() {
    return sizes[props.size] || (props.size || '54');
  }
  const styles = {
    btn: {
      position: 'relative',
      color: '#fff',
      border: '2px solid #fff',
      borderRadius: '100%',
      background: 'transparent',
      width: getSize(),
      height: getSize()
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  };
  return (
    <div style={{ ...styles.btn, ...props.style }}>
      <span style={styles.content}>{props.children}</span>
    </div>
  );
}
