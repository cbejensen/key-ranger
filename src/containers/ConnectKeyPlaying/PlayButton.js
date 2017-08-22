import React from 'react';
import glamorous from 'glamorous';
import Button from 'components/PlayButton';

/*
the purpose of this container
is to prevent sticky hovering on mobile,
so that when you pause the key that is playing
the button will revert back to its normal state
instead of appearing focused
*/

class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false, touch: false };
  }
  handleMouseEnter = () => {
    // mouseEnter is fired after touchEnd
    // when touching btn for first time.
    // we want to ignore this
    if (!this.state.touch) {
      this.setState({ hover: true });
    }
  };
  render() {
    const {
      keyPlaying,
      keyNum,
      onClick,
      ...props
    } = this.props;
    return (
      <Button
        keyPlaying={keyPlaying}
        keyNum={keyNum}
        onClick={() => onClick(keyNum)}
        // desktop
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={() => this.setState({ hover: false })}
        // mobile
        onTouchStart={() => this.setState({ hover: true })}
        onTouchEnd={() =>
          this.setState({ hover: false, touch: true })}
        icon={keyPlaying === keyNum ? 'pause' : 'play'}
        hover={this.state.hover}
        {...props}
      />
    );
  }
}

export default PlayButton;
