import {GET_USER_DETAIL, GET_USER_DETAIL_SUCCESS, GET_USER_DETAIL_FAILURE} from './actionType'
export function getUserDetails() {
    return {
        type: GET_USER_DETAIL
    }
}

export function getUserDetailsSuccess(data) {
    return {
        type: GET_USER_DETAIL_SUCCESS,
        data
    }
}

export function getUserDetailsFailure(error) {
    return {
        type: GET_USER_DETAIL_FAILURE,
        error
    }
}