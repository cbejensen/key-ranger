import React from 'react';
import KeyBoxesContainer from 'containers/KeyBoxesContainer';
import TrackButtons from 'components/TrackButtons';
import CompareFooter from 'components/CompareFooter';

export default function Compare(props) {
  const styles = {
    container: {
      background: '#f1635a',
      height: '100vh'
    },
    content: {
      height: '100%',
      maxWidth: '900px',
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column'
    },
    section: {
      flex: '1 0 auto'
    }
  };
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <KeyBoxesContainer style={styles.section} />
        <TrackButtons style={styles.section} />
        <CompareFooter />
      </div>
    </div>
  );
}
