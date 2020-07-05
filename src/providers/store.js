import { createStore, applyMiddleware } from 'redux';
import createSaga from 'redux-saga';

import { reducers, root } from '../services';

//middleware
const saga = createSaga();

export const store = createStore( reducers, applyMiddleware(saga));

saga.run(root); //starto a generetor function root