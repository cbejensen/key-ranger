import React from 'react';
import CompareContainer from '../containers/CompareContainer';

export default function Compare(props) {
  const styles = {
    container: {
      background: '#f1635a',
      height: '100vh',
      minHeight: '400'
    },
    content: {
      height: '100%',
      maxWidth: '900',
      margin: 'auto'
    }
  };
  return (
    <div style={styles.container}>
      <CompareContainer style={styles.content} />
    </div>
  );
}
