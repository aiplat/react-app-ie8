import { combineReducers } from 'redux';

import donate from 'reducers/donate';
import siteinfo from 'reducers/siteinfo';

export default combineReducers({
    donate,
    siteinfo
});