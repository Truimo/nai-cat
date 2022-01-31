import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.locale('zh-cn')
dayjs.extend(relativeTime)
import htmlspecialchars from '@/module/htmlspecialchars'

export const jump = (href, target) => {
    window.open(href, target)
}

export const analysis = (content) => {  // 解析
    try {
        content = htmlspecialchars(content)
        content = content.replace(/\r\n/g, '<br/>')
        content = content.replace(/\n/g, '<br/>')
        content = content.replace(/\[CQ:.+\]/, '<i class="text-gray-400">NaN</i>')
    } catch (e) {
        console.log('解析出错')
    }
    return content
}

export const moment = t => {  // 人性化时间
    return dayjs(dayjs.unix(t)).fromNow()
}
