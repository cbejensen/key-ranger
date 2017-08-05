import React from 'react';
import TrackBoxes from '../components/TrackBoxes';
import TrackButtons from 'components/TrackButtons';
import CompareFooter from 'components/CompareFooter';

export default function CompareContainer(props) {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column'
    },
    section: {
      flex: '1'
    }
  };
  return (
    <div style={{ ...styles.container, ...props.style }}>
      <TrackBoxes style={styles.section} />
      <TrackButtons style={styles.section} />
      <CompareFooter />
    </div>
  );
}
