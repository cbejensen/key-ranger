import React from 'react';
import CircleButton from 'components/CircleButton';
import CenterButtons from 'components/CenterButtons';

export default function TrackButtons(props) {
  const styles = {
    container: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative'
    },
    bigBtn: {
      position: 'absolute',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      leftOne: {
        left: '25%'
      },
      rightOne: {
        left: '75%'
      }
    }
  };
  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.bigBtn,
          ...styles.bigBtn.leftOne
        }}
      >
        <CircleButton
          icon="thumbs-up"
          size="lg"
          style={{ fontSize: '2em' }}
          flip="horizontal"
        />
      </div>
      <div
        style={{
          ...styles.bigBtn,
          ...styles.bigBtn.rightOne
        }}
      >
        <CircleButton
          icon="thumbs-up"
          size="lg"
          style={{ fontSize: '2em' }}
        />
      </div>
      <CenterButtons />
    </div>
  );
}
