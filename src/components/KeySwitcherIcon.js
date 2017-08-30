import React from 'react';
import FontAwesome from 'react-fontawesome';
import glamorous from 'glamorous';

const KeySwitcherIcon = glamorous(FontAwesome)(
  {
    transition: '.3s'
  },
  ({ name, getSize }) => ({
    fontSize: getSize()
  })
);

export default KeySwitcherIcon;
