import React from 'react';
import { connect } from 'react-redux';
import { playTrack } from 'actions';
import HoverHandler from './HoverHandler';

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

const PlayButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(HoverHandler);

export default PlayButton;