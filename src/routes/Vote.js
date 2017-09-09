import React from 'react';
import KeyBoxes from 'components/KeyBoxes';
import TrackButtons from 'components/TrackButtons';
import VoteFooter from 'components/VoteFooter';

export default function Compare(props) {
  const styles = {
    container: {
      background: '#f1635a',
      width: '100%'
    },
    content: {
      minHeight: '100vh',
      maxWidth: '750px',
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
        <KeyBoxes style={styles.flex} />
        <TrackButtons style={styles.flex} />
        <VoteFooter />
      </div>
    </div>
  );
}
