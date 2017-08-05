import React from 'react';

export default function CompareFooter(props) {
  const styles = {
    container: {
      position: 'relative'
    },
    icon: {
      position: 'absolute',
      bottom: '0',
      rightOne: {
        right: '0'
      }
    },
    center: {
      textAlign: 'center'
    }
  };
  return (
    <div style={styles.container}>
      <div style={styles.icon}>
        back to menu
      </div>
      <div
        style={{ ...styles.icon, ...styles.icon.rightOne }}
      >
        settings
      </div>
      <div style={styles.center}>
        4 / 10
      </div>
    </div>
  );
}
