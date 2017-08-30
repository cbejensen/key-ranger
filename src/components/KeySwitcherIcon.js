import React from 'react';
import FontAwesome from 'react-fontawesome';
import glamorous from 'glamorous';

const Icon = ({ className, name }) => {
  return <FontAwesome className={className} name={name} />;
};

const KeySwitcherIcon = glamorous(Icon)(
  {
    transition: '.3s'
  },
  ({ name, getSize }) => ({
    fontSize: getSize()
  })
);

export default KeySwitcherIcon;
