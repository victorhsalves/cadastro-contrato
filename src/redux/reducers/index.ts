import { combineReducers } from 'redux';
import { contractReducer } from './contract';

const rootReducer = combineReducers({
    contract: contractReducer
});

export default rootReducer;