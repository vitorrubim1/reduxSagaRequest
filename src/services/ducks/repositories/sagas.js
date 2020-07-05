import { call, put } from 'redux-saga/effects'; //generators

import { api } from '../../../providers/api';
import { successRepositories, failureRepositories } from './actions';

//generator function
export function* Repos(action){
  try{
    const response = yield call(//call literalmente chama alguma coisa, nesso caso api
      api.get,
      `/users/${action.payload.user}/repos?page=${action.payload.page}`
    );

    if(response.data && response.data.length){ //se houver repos:
      yield put(successRepositories(response.data));
    } else {
      yield put(failureRepositories(new Error("Falha ao buscar repositorios")));
    }
  } catch (error) {
    yield put(failureRepositories(error));
  }
}