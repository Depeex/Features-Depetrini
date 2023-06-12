import { createStore, combineReducers } from 'redux';

import { inputReducer } from './reducers/index';

const rootReducer = combineReducers({ input: inputReducer });

export default createStore(rootReducer);
