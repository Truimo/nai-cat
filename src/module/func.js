/**
 * 去除两边空格
 * @param r 要去除的字符
 * @param n 默认为空格
 * @returns String
 */
export const trim = (r, n) => {
    let t = [" ", "\n", "\r", "\t", "\f", "\v", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "​", "\u2028", "\u2029", "　"].join(""),
        e, i;
    for (r += "", n && (t = (n + "").replace(/([[\]().?/*{}+$^:])/g, "$1")), e = r.length, i = 0; i < e; i++) if (-1 === t.indexOf(r.charAt(i))) {
        r = r.substring(i);
        break
    }
    for (e = r.length, i = e - 1; i >= 0; i--) if (-1 === t.indexOf(r.charAt(i))) {
        r = r.substring(0, i + 1);
        break
    }
    return -1 === t.indexOf(r.charAt(0)) ? r : ""
}
