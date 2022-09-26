import { all } from 'redux-saga/effects'
import contract from './contract';

export default function* rootSaga(): Generator<any> {
    return yield all([contract]);
}