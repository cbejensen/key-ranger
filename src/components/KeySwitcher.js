import React from 'react';
import CircleButton from 'components/CircleButton';

export default function KeySwitcher(props) {
  const switchKey = () => {
    if (!props.keyPlaying || props.keyPlaying === 2) {
      props.onClick(1);
    } else if (props.keyPlaying === 1) {
      props.onClick(2);
    }
  };
  return (
    <CircleButton size="sm" onClick={switchKey}>
      &lt;&gt;
    </CircleButton>
  );
}
