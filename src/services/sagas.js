import { all, takeLatest } from 'redux-saga/effects'; //generators

import { Repos, RepositoriesTypes } from './ducks/repositories';

export function* root(){
  yield all([
    takeLatest(RepositoriesTypes.REQUEST, Repos)
  ])
}