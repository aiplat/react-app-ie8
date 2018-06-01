export const CKLOG = 'login/CKLOG'

export function ckLog(uid,func) {
    return { type: CKLOG, uid: uid,func:func }
}