import React from 'react';
import CompareContainer from '../containers/CompareContainer';

export default function Compare(props) {
  const styles = {
    container: {
      background: '#f1635a',
      height: '100vh'
    },
    content: {
      height: '100%',
      maxWidth: '900px',
      margin: 'auto'
    }
  };
  return (
    <div style={styles.container}>
      <CompareContainer style={styles.content} />
    </div>
  );
}
