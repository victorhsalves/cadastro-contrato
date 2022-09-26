import * as types from '../../types'

export type ContractType = {
    docNumber: string,
    socialReason: string,
    company: string,
    products: number
}

export function getContractsRequest(token: string):{
    type: string,
    payload: string
} {
    return {
        type: types.GET_CONTRACTS_REQUEST,
        payload: token
    }
}

export function getContractsSuccess(contract: ContractType):{
    type: string,
    payload: ContractType
} {
    return {
        type: types.GET_CONTRACTS_SUCCESS,
        payload: contract
    }
}

export function getContractsFailure(error: string):{
    type: string,
    payload: string
} {
    return {
        type: types.GET_CONTRACTS_FAILURE,
        payload: error
    }
}