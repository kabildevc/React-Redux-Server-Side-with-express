
import {GET_USER_DETAIL, GET_USER_DETAIL_SUCCESS, GET_USER_DETAIL_FAILURE} from './actionType'
const initialState = {
    isLoading: false,
    data: {},
    error : false
}
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_DETAIL: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case GET_USER_DETAIL_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: action.data,
                error : false
            };
        }
        case GET_USER_DETAIL_FAILURE: {
            return {
                ...state,
                isLoading: true,
                error: action.error,
            };
        }
        default:
            return state;
    }
};