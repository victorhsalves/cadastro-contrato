import { call, put } from '@redux-saga/core/effects'
import { all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { ContractType, getContractsFailure, getContractsSuccess } from '../../actions';
import * as types from '../../types';

let contractApi: ContractType;


const contractRequest = async (token: string) => {
    await api.get('/test', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }).then((data) => {
        contractApi = data.data;
        return true;
    }).catch((error) => {
        console.log(error);
        return false;
    });
}



export function* contractData(action: { type: string, payload: string}) {
    try {
        yield call(contractRequest, action.payload);
        yield put(getContractsSuccess(contractApi));
    } catch(error) {
        yield put(getContractsFailure("Falha ao buscar contratos!"));
    }
}



export default all([takeLatest(types.GET_CONTRACTS_REQUEST, contractData)])