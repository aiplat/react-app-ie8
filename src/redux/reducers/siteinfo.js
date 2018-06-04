import { GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAIL } from 'actions/siteinfo'

const initState = {
    res: -2,
    isLoading: false,
    info: {},
    errorMsg: ''
}

const updateState = (state, res, isLoading, info, errorMsg) => {
    return {
        ...state,
        res: res,
        isLoading: isLoading,
        info: info,
        errorMsg: errorMsg
    }
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_INFO_REQUEST:
            return updateState(state, -1, true, {}, '')
        case GET_INFO_SUCCESS:
            return updateState(state, 0, false, action.result.data, '')
        case GET_INFO_FAIL:
            return updateState(state, 1, false, {}, '请求出错了,请重试')
        default:
            return state
    }
}