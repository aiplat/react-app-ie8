export const GET_INFO_REQUEST = 'siteinfo/GET_INFO_REQUEST'
export const GET_INFO_SUCCESS = 'siteinfo/GET_INFO_SUCCESS'
export const GET_INFO_FAIL = 'siteinfo/GET_INFO_FAIL'

export function getSiteInfo() {
    return {
        types: [GET_INFO_REQUEST, GET_INFO_SUCCESS, GET_INFO_FAIL],
        promise: server => server.get('/api/siteinfo.json')
    }
}