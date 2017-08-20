const initialState = {
  keyPlaying: 0,
  key1: 'A',
  key2: 'B',
  trackId: 'c1sd5Fx3'
};

const keyRangerApp = (state = initialState, action) => {
  switch (action.type) {
    case 'PLAY_TRACK':
      return {
        ...state,
        keyPlaying: state.keyPlaying === action.key
          ? 0
          : action.key
      };
      break;
    default:
      return state;
  }
};

export default keyRangerApp;
