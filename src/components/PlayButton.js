import glamorous from 'glamorous';
import CircleButton from 'components/CircleButton';

// here we override the CircleButton styles
// based on whether the key is playing and/or hovered
export default glamorous(
  CircleButton
)(({ keyPlaying, keyNum, hover }) => {
  // if this key is playing
  // or if it's being hovered
  if (keyPlaying === keyNum || hover) {
    return {
      backgroundColor: '#ffffff',
      borderColor: '#ffffff',
      transform: 'scale(1.1)',
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
