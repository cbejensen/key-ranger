import React from 'react';
import TrackBox from './TrackBox';

export default function TrackComparison(props) {
  const styles = {
    container: {
      flex: '1',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '15px'
    },
    box: {
      height: '100%',
      withBorder: {
        borderRight: '1px solid #fff'
      }
    }
  };
  return (
    <div style={styles.container}>
      <TrackBox
        style={{ ...styles.box, ...styles.box.withBorder }}
      />
      <TrackBox style={styles.box} />
    </div>
  );
}
