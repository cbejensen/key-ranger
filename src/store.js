import { createStore } from 'redux';
import keyRangerApp from './reducers';
import { playTrack } from './actions';

let store = createStore(keyRangerApp);

// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

// Dispatch some actions
store.dispatch(playTrack(1));
store.dispatch(playTrack(2));
store.dispatch(playTrack(2));
store.dispatch(playTrack(1));
store.dispatch(playTrack(0));

// Stop listening to state updates
unsubscribe();
