export default function combineReducers(reducers) {
  return function(state, action) {
    let key = Object.keys(reducers);
    let newState = {};

    for (let i = 0; i < key.length; i++) {
      if (i === 0) {
        newState = reducers[key[i]](state, action);
        continue;
      }
      newState = reducers[key[i]](newState, action);
    }
    return newState;
  };
}
