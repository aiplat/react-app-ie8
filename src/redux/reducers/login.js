import { CKLOG } from 'actions/login'

var initState = {
    uid: 0,
    func:()=>{

    }
}

//判断是否登录，存储过uid到localStorage?
const uid2 = window.cm.getLS('uid')
if(uid2){
    initState.uid=uid2
}

const updateState = (uid,func) => {
    window.cm.setLS('uid',uid)
    return { uid: uid,func:func()}
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case CKLOG:
            return updateState(action.uid,action.func)
        default:
            return state
    }
}