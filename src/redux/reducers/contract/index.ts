import { ContractType } from "../../actions";
import * as types from '../../types';

interface ContractState {
    contract?: ContractType,
    loading?: boolean,
    started?: boolean,
    error: string
}

const initialState: ContractState = {
    contract: {
        docNumber: '',
        company: '',
        socialReason: '',
        products: 0
    },
    loading: false,
    started: true,
    error: ''
}

export const contractReducer = (state = initialState, action: {
    type: string,
    payload: ContractType
}) => {
    switch (action.type) {
        case types.GET_CONTRACTS_REQUEST:
            return {
                ...state,
                loading: true,
                contract: action.payload,
                error: ''
            }
        case types.GET_CONTRACTS_SUCCESS:
            return {
                ...state,
                loading: false,
                contract: action.payload,
                started: false,
                error: ''
            };
        case types.GET_CONTRACTS_FAILURE:
            return {
                ...state,
                loading: false,
                started: false,
                error: action.payload
            }
        default: return state
    }
}