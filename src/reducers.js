const initialState = {
  playing: 0,
  trackId: 'c1sd5Fx3',
  keys: ['A', 'B']
};

const keyRangerApp = (state = initialState, action) => {
  switch (action.type) {
    case 'PLAY_TRACK':
      return {
        ...state,
        playing: state.playing === action.key
          ? 0
          : action.key
      };
      break;
    default:
      return state;
  }
};

export default keyRangerApp;
