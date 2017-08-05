import React from 'react';

export default function TrackBox(props) {
  const styles = {
    box: {
      flex: '1',
      textAlign: 'center'
    }
  };
  return (
    <div style={{ ...styles.box, ...props.style }}>
      <div>Track</div>
      <div>1</div>
      <div>Play</div>
    </div>
  );
}
