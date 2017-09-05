import { connect } from 'react-redux';
import { changeScreen } from 'actions';
import { Main, Sub } from 'routes';
import Wrapper from 'components/AppWrapper';

const mapStateToProps = (state, ownProps) => {
  return {
    screen: state.screen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeScreen: screen => dispatch(changeScreen(screen))
  };
};

const AppWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Wrapper);

export default AppWrapper;
