import React from 'react';
import CircleButton from 'components/CircleButton';
import FontAwesome from 'react-fontawesome';

export default function KeySwitcher(props) {
  const switchKey = () => {
    if (!props.keyPlaying || props.keyPlaying === 2) {
      props.onClick(1);
    } else {
      props.onClick(2);
    }
  };
  const getSize = chevron => {
    if (props.keyPlaying === 1) {
      return chevron === 'left' ? '0.7em' : '1.2em';
    } else if (props.keyPlaying === 2) {
      return chevron === 'left' ? '1.2em' : '0.7em';
    } else {
      return '1em';
    }
  };
  return (
    <CircleButton size="sm" onClick={switchKey}>
      <FontAwesome
        name="chevron-left"
        style={{ fontSize: getSize('left') }}
      />
      <FontAwesome
        name="chevron-right"
        style={{ fontSize: getSize('right') }}
      />
    </CircleButton>
  );
}
