import glamorous from 'glamorous';
import CircleButton from 'components/CircleButton';

export default glamorous(
  CircleButton
)(({ keyPlaying, keyNum, hover }) => {
  console.log(keyPlaying, keyNum, hover);
  if (keyPlaying === keyNum || hover) {
    return {
      backgroundColor: '#ffffff',
      borderColor: '#ffffff',
      ':hover': {
        backgroundColor: '#ffffff',
        borderColor: '#ffffff'
      }
    };
  } else {
    return {
      backgroundColor: 'transparent',
      borderColor: '#292929',
      ':hover': {
        backgroundColor: 'transparent',
        borderColor: '#292929',
        transform: 'initial'
      }
    };
  }
});
