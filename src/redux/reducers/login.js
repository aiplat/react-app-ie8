import { CKLOG } from 'actions/login'

const initState = {
    uid: 0,
    func:()=>{

    }
}

const updateState = (uid,func) => {
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