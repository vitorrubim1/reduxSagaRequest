import { combineReducers } from 'redux';

import { RepositoriesReducer } from './ducks/repositories';

export const reducers = combineReducers({
  repos: RepositoriesReducer,
});

export { root } from './sagas';