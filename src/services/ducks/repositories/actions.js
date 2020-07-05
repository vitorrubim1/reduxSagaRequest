import { RepositoriesTypes } from './types';

//ACTIONS
export const requestRepositories = (user, page = 1) => ({
  type: RepositoriesTypes.REQUEST,
  payload: { user, page },
});

export const successRepositories = (data) => ({
  type: RepositoriesTypes.SUCCESS,
  payload: { data },
});

export const failureRepositories = (error) => ({
  type: RepositoriesTypes.FAILURE,
  payload: { error },
});
