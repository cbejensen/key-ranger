import { connect } from 'react-redux';
import { changeScreen } from 'actions';
import Line from 'components/DividingLine';

const mapStateToProps = ({ screen }, ownProps) => {
  return {
    screen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeScreen: screen => dispatch(changeScreen())
  };
};

const DividingLine = connect(
  mapStateToProps,
  mapDispatchToProps
)(Line);

export default DividingLine;
