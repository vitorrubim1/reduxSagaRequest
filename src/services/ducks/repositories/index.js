export { reducer as RepositoriesReducer } from './reducer'; //as renomeia
export { 
  requestRepositories, 
  successRepositories,
  failureRepositories 
} from './actions';
export { Repos } from './sagas';
export { RepositoriesTypes } from './types';

//exportando todo o conteúdo da pasta repositories por aq