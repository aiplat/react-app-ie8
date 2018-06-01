import { combineReducers } from 'redux'

import login from 'reducers/login'
import donate from 'reducers/donate'
import siteinfo from 'reducers/siteinfo'

export default combineReducers({
    login,
    donate,
    siteinfo
})