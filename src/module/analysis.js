import htmlspecialchars from '@/module/htmlspecialchars'

const analysis = (content) => {  // 解析
    try {
        content = htmlspecialchars(content)
        content = content.replace(/\r\n/g, '<br/>')
        content = content.replace(/\n/g, '<br/>')
        content = content.replace(/\[CQ:.+]/, '<i class="text-gray-400">NaN</i>')
    } catch (e) {
        console.log('解析出错')
    }
    return content
}

export default analysis
