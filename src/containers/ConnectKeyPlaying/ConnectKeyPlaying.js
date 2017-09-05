import { connect } from 'react-redux';
import { playTrack } from 'actions';
import PlayContainer from './PlayButton';
import Switcher from 'components/KeySwitcher';

const mapStateToProps = ({ keyPlaying }, ownProps) => {
  return {
    keyPlaying
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

export const PlayButton = connectKeyPlaying(PlayContainer);
export const KeySwitcher = connectKeyPlaying(Switcher);
