const cookie = {
    set: (key, value) => {
        const exp = new Date()
        const Days = 30 * 12 * 10
        exp.setTime(exp.getTime() + Days*24*60*60*1000)
        document.cookie = key + "="+ escape (value) + ";expires=" + exp.toGMTString()
    },
    get: key => {
        let reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)"),
            arr = document.cookie.match(reg)
        if (arr) {
            return unescape(arr[2])
        } else {
            return null
        }
    },
    remove: key => {
        const exp = new Date()
        exp.setTime(exp.getTime() - 1)
        const val = this.get(key)
        if (val != null) {
            document.cookie= key+"="+val+";expires="+exp.toGMTString()
        }
    }
}

const local = {
    set: (key, value) => {
        window.localStorage.setItem(key, value)
    },
    get: key => {
        window.localStorage.getItem(key)
    },
    remove: key => {
        window.localStorage.removeItem(key)
    }
}

const session = {
    set: (key, value) => {
        window.sessionStorage.setItem(key, value)
    },
    get: key => {
        window.sessionStorage.getItem(key)
    },
    remove: key => {
        window.sessionStorage.removeItem(key)
    }
}

export default {
    cookie, local, session
}
