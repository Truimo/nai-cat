import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.locale('zh-cn')
dayjs.extend(relativeTime)

const moment = t => {  // 人性化时间
    return dayjs(dayjs.unix(t)).fromNow()
}

export default moment
