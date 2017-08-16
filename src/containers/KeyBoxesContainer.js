import React from 'react';
import { connect } from 'react-redux';
import KeyBoxes from 'components/KeyBoxes';
import { playTrack } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    playing: state.playing
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: key => dispatch(playTrack(key))
  };
};

const KeyBoxesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KeyBoxes);

const KeyBoxesContainerTest = () => <div>hey</div>;

export default KeyBoxesContainer;
