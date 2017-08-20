import React from 'react';
import glamorous from 'glamorous';
import PlayButton from 'components/PlayButton';

class HoverHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }
  render() {
    const {
      keyPlaying,
      keyNum,
      onClick,
      ...props
    } = this.props;
    return (
      <PlayButton
        keyPlaying={keyPlaying}
        keyNum={keyNum}
        onClick={() => onClick(keyNum)}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
        onTouchStart={() => this.setState({ hover: true })}
        onTouchEnd={() => this.setState({ hover: false })}
        icon={keyPlaying === keyNum ? 'pause' : 'play'}
        {...this.state}
        {...props}
      />
    );
  }
}

export default HoverHandler;
