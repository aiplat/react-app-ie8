export const CKLOG = 'login/CKLOG'

window.cm=require('plugins/cmapp')

export function ckLog(uid,func) {
    return { type: CKLOG, uid: uid,func:func }
}