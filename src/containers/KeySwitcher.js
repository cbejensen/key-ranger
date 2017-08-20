import React from 'react';
import { connect } from 'react-redux';
import { playTrack } from 'actions';
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

const KeySwitcher = connect(
  mapStateToProps,
  mapDispatchToProps
)(Switcher);

export default KeySwitcher;
