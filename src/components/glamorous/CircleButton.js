import React from 'react';
import glamorous from 'glamorous';

const sizes = {
  sm: '40',
  md: '70',
  lg: '100'
};

export default glamorous.div(
  {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    background: 'transparent',
    transition:
      '.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    ':hover': {
      cursor: 'pointer',
      transform: 'scale(1.1)'
    }
  },
  ({ size = 'md', dark = false }) => ({
    width: sizes[size] || size,
    height: sizes[size] || size,
    fontSize: `${(sizes[size] || size) / 2}px`,
    color: dark ? '#292929' : '#ffffff',
    border: `1px solid ${dark ? '#292929' : '#ffffff'}`,
    ':hover': {
      backgroundColor: dark ? '#ffffff' : '#000000',
      borderColor: dark ? '#ffffff' : '#000000',
      color: dark ? '#000000' : '#ffffff'
    }
  })
);
