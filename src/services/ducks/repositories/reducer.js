import { RepositoriesTypes } from './types';

const initialState = {
  loading: false,
  error: false,
  data: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type){
    case RepositoriesTypes.REQUEST:
      return { ...state, loading: true };
    case RepositoriesTypes.SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case RepositoriesTypes.FAILURE:
      return { 
        ...state, 
        loading: false, 
        error: true, 
        data: [] 
      }
    default:
      return state;
  }
};
