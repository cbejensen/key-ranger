import React from 'react';
import { connect } from 'react-redux';
import { playTrack } from 'actions';
import HoverHandler from './HoverHandler';
import Switcher from 'components/KeySwitcher';

const mapStateToProps = (state, ownProps) => {
  return {
    keyPlaying: state.keyPlaying
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: keyNum => dispatch(playTrack(keyNum))
  };
};

const connectKeyPlaying = connect(
  mapStateToProps,
  mapDispatchToProps
);

export const PlayButton = connectKeyPlaying(HoverHandler);
export const KeySwitcher = connectKeyPlaying(Switcher);
