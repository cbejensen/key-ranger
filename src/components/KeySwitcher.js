import React from 'react';
import CircleButton from 'components/CircleButton';
import KeySwitcherIcon from './KeySwitcherIcon';

export default function KeySwitcher(props) {
  const switchKey = () => {
    if (!props.keyPlaying || props.keyPlaying === 2) {
      props.onClick(1);
    } else {
      props.onClick(2);
    }
  };
  const getSize = direction => {
    if (props.keyPlaying === 1) {
      return direction === 'left' ? '0.7em' : '1.2em';
    } else if (props.keyPlaying === 2) {
      return direction === 'left' ? '1.2em' : '0.7em';
    } else {
      return '1em';
    }
  };
  return (
    <CircleButton size="sm" onClick={switchKey}>
      <KeySwitcherIcon
        name="chevron-left"
        getSize={() => getSize('left')}
      />
      <KeySwitcherIcon
        name="chevron-right"
        getSize={() => getSize('right')}
      />
    </CircleButton>
  );
}
