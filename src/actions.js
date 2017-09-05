export const PLAY_TRACK = 'PLAY_TRACK';
export const CHANGE_SCREEN = 'CHANGE_SCREEN';

export function playTrack(key) {
  return {
    type: PLAY_TRACK,
    key
  };
}

export function changeScreen(screen) {
  return {
    type: CHANGE_SCREEN,
    screen
  };
}
