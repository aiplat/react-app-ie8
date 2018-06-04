/*
 -----------------------------------------------------------------
 // Copyright (C) 2016 womendi 版权所有。
 // cmapp.js
 // 创 建 人：womendi
 // 修改日期：2018.05.24
 -----------------------------------------------------------------
 */

const cm = {};
cm.a = { 'url': 'http://' + window.location.host, 'logts': '请您先登陆', 'isnet': '手机未连接网络哦', 'wlerr': '网络出错了,请检查', 'wling': '正在拼命加载中..', 'wlts': '加载中,请稍等..' };
cm.c = { 'author': 'womendi@qq.com', 'name': 'cmapp.js', 'txt': '公共JS', 'url': 'http://' + window.location.host, 'href': window.location.href, 'hash': window.location.hash, 'nv': window.navigator, 'pf': window.navigator.platform, 'ua': window.navigator.userAgent.toLowerCase() };
cm.app = { 'url': cm.a.url, 'project': 'ai智能空间', 'name': 'ai智能空间', 'title': 'ai智能空间', 'keywords': 'ai智能空间,人工智能空间,aiplat,aiplat.com,AI,人工智能,智能空间,亲信地铁,亲信,地铁', 'description': 'ai智能空间,即将提供人工智能资讯,目标成为中国最大最全最专业的的人工智能资讯平台。' };
cm.app.iswx = cm.c.ua.match(/MicroMessenger/i) == 'micromessenger' ? 1 : 0;
cm.app.isapp = cm.c.ua.match(/html5plus/i) == 'html5plus' ? 1 : 0;
//setLS getLS clearLS支持ie8
cm.setLS = function (k, v, t) {
    var tp = t ? window.sessionStorage : window.localStorage;
    tp[k] = v;
}
cm.getLS = function (k, t) {
    var tp = t ? window.sessionStorage : window.localStorage;
    return tp[k] ? tp[k] : '';
}
cm.clearLS = function (k, t) {
    var tp = t ? window.sessionStorage : window.localStorage;
    if (k) {
        tp.removeItem(k);
    } else {
        tp.clear();
    }
}
cm.lt10 = function (m) {
    if (m < 10) {
        m = '0' + m;
    }
    return m;
}
cm.nowTime = function (tp, nd, f) {
    /*
     * 1，当前日期时间戮  cm.nowTime(0,0);
     * 2，日期转时间戮  cm.nowTime(0,'2017-01-01');
     * 3，时间戮转日期  cm.nowTime(1,'1500002222',f);//f为格式
     * */
    var n, t;
    if (nd) {
        n = new Date(nd);
    } else {
        n = new Date();
    }
    if (tp == 0) {//日期转时间戮
        t = parseInt(n.valueOf() / 1000);
    } else {//时间戮转日期
        var y = n.getYear() + 1900;
        var m = cm.lt10(n.getMonth() + 1);
        var d = cm.lt10(n.getDate());
        var h = cm.lt10(n.getHours());
        var m2 = cm.lt10(n.getMinutes());
        var s = cm.lt10(n.getSeconds());
        switch (f) {
            case 1:
                t = y + '-' + m + '-' + d + ' ' + h + ':' + m2 + ':' + s;
                break;
            case 2:
                t = y + '/' + m + '/' + d + ' ' + h + ':' + m2 + ':' + s;
                break;
            case 3:
                t = y + '/' + m + '/' + d;
                break;
            case 4:
                t = y + '/' + m + '/' + d + '-' + h + ':' + m2 + ':' + s;
                break;
            case 5:
                t = y + '/' + m;
                break;
            case 6:
                t = h + ':' + m2 + ':' + s;
                break;
            case 7:
                t = m + '/' + d;
                break;
            default:
                t = y + '-' + m + '-' + d;
                break;
        }
    }
    return t;
}
window.console = window.console || (function () {
    var c ={};
　　 c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile= c.clear = c.exception = c.trace = c.assert = function(){};
    return c;
})();
cm.cl = function (txt) {
    if (typeof txt == 'object' || typeof txt == '[object object]') {
        txt = JSON.stringify(txt);
    }
    console.log('time:' + cm.nowTime(1, 0, 1) + '-->' + txt);
}
cm.isMob = function () {
    var ua = cm.c.ua;
    if (ua.indexOf('mobile') >= 0) {
        if (ua.indexOf('android') >= 0) {
            return 1;
        } else if (ua.indexOf('iphone') >= 0) {
            return 2;
        } else {
            return 3;
        }
    } else {
        return 0;
    }
}
cm.isUname = function (val) {
    var regN = new RegExp('^[\w\u4e00-\u9fa5]+$');
    if (!val) {
        val = '用户名不能为空';
    } else if (!regN.test(val)) {
        val = '用户名由中文 字母 数字组成';
    } else {
        val = 1;
    }
    return val;
}
cm.isUser = function (val) {
    var regN = new RegExp('^[a-zA-Z]{1}([a-zA-Z0-9]){2,11}$');
    if (!val) {
        val = '不能为空';
    } else if (!regN.test(val)) {
        val = '由3-12个字母与数字组成';
    } else {
        val = 1;
    }
    return val;
}
cm.isSj = function (val) {
    var reg = new RegExp('^1[3|5|7|8][0-9]{9}$');
    if (!val) {
        val = '手机号不能为空';
    } else if (!(reg.test(val))) {
        val = '请输入有效的11位手机号';
    } else {
        val = 1;
    }
    return val;
}
cm.isPwd = function (val) {
    var reg = new RegExp('^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,15}$');
    if (!val) {
        val = '密码不能为空';
    } else if (!reg.test(val)) {
        val = '密码由6-15个字母与数字组成';
    } else {
        val = 1;
    }
    return val;
}
cm.isYzm = function (val) {
    var reg = new RegExp('^([0-9]){6}$');
    if (!val) {
        val = '验证码不能为空';
    } else if (!reg.test(val)) {
        val = '验证码由6个数字组成';
    } else {
        val = 1;
    }
    return val;
}
cm.isZFmm = function (val) {
    var reg = new RegExp('^([0-9]){6}$');
    if (!val) {
        val = '支付密码不能为空';
    } else if (!reg.test(val)) {
        val = '支付密码由6个数字组成';
    } else {
        val = 1;
    }
    return val;
}
cm.chkPW = function (p1, p2) {
    var val;
    if (p1 != p2) {
        val = '两次密码不一致';
    } else {
        val = 1;
    }
    return val;
}
cm.isMail = function (val) {
    var reg = /^[a-zA-z0-9][a-zA-Z0-9_\-\.]*@([a-zA-Z0-9]+[_\-\.])+[a-zA-Z]{2,4}$/;
    if (!val) {
        val = '邮箱不能为空';
    } else if (!(reg.test(val))) {
        val = '请输入有效的邮箱';
    } else {
        val = 1;
    }
    return val;
}
cm.sfz = function (idcard) {
    var Errors = new Array(1, '身份证号码位数不对', '出生日期错误', '身份证号码错误', '身份证地区非法');
    var area = { 11: '北京', 12: '天津', 13: '河北', 14: '山西', 15: '内蒙古', 21: '辽宁', 22: '吉林', 23: '黑龙江', 31: '上海', 32: '江苏', 33: '浙江', 34: '安徽', 35: '福建', 36: '江西', 37: '山东', 41: '河南', 42: '湖北', 43: '湖南', 44: '广东', 45: '广西', 46: '海南', 50: '重庆', 51: '四川', 52: '贵州', 53: '云南', 54: '西藏', 61: '陕西', 62: '甘肃', 63: '青海', 64: '宁夏', 65: 'xinjiang', 71: '台湾', 81: '香港', 82: '澳门', 91: '国外' }
    var Y, JYM;
    var S, M, ereg, Err;
    var idcard_array = new Array();
    idcard_array = idcard.split('');
    if (area[parseInt(idcard.substr(0, 2))] == null) {
        Err = Errors[4];
        return Err;
    }
    switch (idcard.length) {
        case 15:
            if ((parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0 || ((parseInt(idcard.substr(6, 2)) + 1900) % 100 == 0 && (parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0)) {
                ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;//测试出生日期的合法性
            } else {
                ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;//测试出生日期的合法性
            }
            if (ereg.test(idcard)) {
                Err = Errors[0];
            } else {
                Err = Errors[2];
            }
            break;
        case 18:
            if (parseInt(idcard.substr(6, 4)) % 4 == 0 || (parseInt(idcard.substr(6, 4)) % 100 == 0 && parseInt(idcard.substr(6, 4)) % 4 == 0)) {
                ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/;//闰年出生日期的合法性正则表达式
            } else {
                ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/;//平年出生日期的合法性正则表达式
            }
            if (ereg.test(idcard)) {
                S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7 + (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9 + (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10 + (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5 + (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8 + (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4 + (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2 + parseInt(idcard_array[7]) * 1 + parseInt(idcard_array[8]) * 6 + parseInt(idcard_array[9]) * 3;
                Y = S % 11;
                M = 'F';
                JYM = '10X98765432';
                M = JYM.substr(Y, 1);
                if (M == idcard_array[17]) {
                    Err = Errors[0];
                } else {
                    Err = Errors[3];
                }
            } else {
                Err = Errors[2];
            }
            break;
        default:
            Err = Errors[1];
            break;
    }
    return Err;
}
cm.stopCP = function () {
    document.oncontextmenu = function (event) {
        if (window.event) {
            event = window.event;
        }
        try {
            var the = event.srcElement;
            if (!((the.tagName == 'INPUT' && the.type.toLowerCase() == 'text') || the.tagName == 'TEXTAREA')) {
                return false;
            }
            return true;
        } catch (e) {
            return false;
        }
    }
    document.onpaste = function (event) {
        if (window.event) {
            event = window.event;
        }
        try {
            var the = event.srcElement;
            if (!((the.tagName == 'INPUT' && the.type.toLowerCase() == 'text') || the.tagName == 'TEXTAREA')) {
                return false;
            }
            return true;
        } catch (e) {
            return false;
        }
    }
    document.oncopy = function (event) {
        if (window.event) {
            event = window.event;
        }
        try {
            var the = event.srcElement;
            if (!((the.tagName == 'INPUT' && the.type.toLowerCase() == 'text') || the.tagName == 'TEXTAREA')) {
                return false;
            }
            return true;
        } catch (e) {
            return false;
        }
    }
    document.oncut = function (event) {
        if (window.event) {
            event = window.event;
        }
        try {
            var the = event.srcElement;
            if (!((the.tagName == 'INPUT' && the.type.toLowerCase() == 'text') || the.tagName == 'TEXTAREA')) {
                return false;
            }
            return true;
        } catch (e) {
            return false;
        }
    }
    document.onselectstart = function (event) {
        if (window.event) {
            event = window.event;
        }
        try {
            var the = event.srcElement;
            if (!((the.tagName == 'INPUT' && the.type.toLowerCase() == 'text') || the.tagName == 'TEXTAREA')) {
                return false;
            }
            return true;
        } catch (e) {
            return false;
        }
    }
}
cm.isIE = function () {
    var userAgent = navigator.userAgent;
    var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
    return isIE ? 1 : 0;
}
cm.isIE8 = function (func) {
    var userAgent = navigator.userAgent;
    var isIE = cm.isIE();
    if (isIE) {
        var reIE = new RegExp('MSIE (\\d+\\.\\d+);');
        reIE.test(userAgent);
        var v = parseFloat(RegExp['$1'])
        if (v <= 9) {
            if (typeof func == 'function') {
                func();
            }
        }
    }
}
cm.keyDown = function (func) {
    function kd(e) {
        var k;
        var isIE = cm.isIE();
        if (isIE) {
            k = window.event.keyCode;
        } else {
            k = e.keyCode;
        }
        func && func(k);
    }
    document.onkeydown = kd;
}
cm.tobd = function () {
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    var arr2 = ['https://zz.bdstatic.com/linksubmit/push.js', 'http://push.zhanzhang.baidu.com/push.js'];
    var bid = 1;
    if (curProtocol === 'https') bid = 0;
    bp.src = arr2[bid];
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(bp, s);
};
cm.ani = {};
cm.updateAni = (path, type) => {
    const type1 = type ? type : 'cm_Wr2l04';
    const newState = { aid: 0, ani: 'cm_Load ' + type1 };
    if (path == 1) {
        return newState;
    }
    cm.ani[path] = cm.ani ? (cm.ani[path] ? cm.ani[path] : newState) : newState;

    if (cm.ani[path].aid == 0) {
        newState.aid = 1;
    } else {
        newState.aid = 2;
        newState.ani = '';
    }
    cm.ani[path] = newState;
    return cm.ani[path];
}
cm.toBackAni = (t, type) => {
    if (type == 'noAni') {
        window.history.go(-1)
        return;
    }
    t.setState({
        win: cm.updateAni(1, type ? type : 'cm_Wl2r03')
    });
    setTimeout(function () {
        window.history.go(-1)
    }, 288)
}
cm.ckBackAni = (t) => {
    if (t.props.Hdata.bktype == 1) {
        window.history.go(-1)
        return;
    }
    t.props.toBackAni();
}
cm.msg = {};
cm.setMsg = (t, v) => {
    cm.msg[t] = v;
}
cm.getMsg = (t) => {
    return cm.msg ? (cm.msg[t] ? cm.msg[t] : undefined) : undefined;
}
cm.clearMsg = (t) => {
    var v = cm.msg ? (cm.msg[t] ? cm.msg[t] : undefined) : undefined;
    if (v) {
        cm.msg[t] = '';
    }
}
module.exports = cm;