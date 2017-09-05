export const PLAY_TRACK = 'PLAY_TRACK';

export function playTrack(key) {
  return {
    type: PLAY_TRACK,
    key
  };
}
