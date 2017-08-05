import React from 'react';
import CircleButton from 'components/CircleButton';

export default function CenterButtons(props) {
  const styles = {
    container: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '175px'
    },
    btnContainer: {
      flex: '1',
      margin: '5px 0'
    },
    btn: {
      position: 'relative',
      top: '50%',
      transform: 'translateY(-50%)'
    }
  };
  return (
    <div style={styles.container}>
      <div style={styles.btnContainer}>
        <CircleButton style={styles.btn} size="sm">
          &lt;&gt;
        </CircleButton>
      </div>
      <div>
        <CircleButton size="md">
          =
        </CircleButton>
      </div>
      <div style={styles.btnContainer}>
        <CircleButton style={styles.btn} size="sm">
          &gt;&gt;
        </CircleButton>
      </div>
    </div>
  );
}
