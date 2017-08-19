import React from 'react';
import KeyBoxesContainer from 'containers/KeyBoxesContainer';
import TrackButtons from 'components/TrackButtons';
import CompareFooter from 'components/CompareFooter';

export default function Compare(props) {
  const styles = {
    container: {
      background: '#f1635a',
      width: '100%'
    },
    content: {
      minHeight: '100vh',
      maxWidth: '900px',
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column'
    },
    flex: {
      flex: '1'
    }
  };
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <KeyBoxesContainer style={styles.flex} />
        <TrackButtons style={styles.flex} />
        <CompareFooter />
      </div>
    </div>
  );
}
