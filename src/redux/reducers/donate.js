import { TSONE } from 'actions/donate'

const initState = {
    dnid: 0
}

const updateState = (id) => {
    return { dnid: id }
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case TSONE:
            return updateState(action.id)
        default:
            return state
    }
}