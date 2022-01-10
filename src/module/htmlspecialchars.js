const htmlspecialchars = s => {
    if (s.length  ===  0)  return ''
    s = s.replace(/&/g, '&gt;')
    s = s.replace(/</g, '&lt;')
    s = s.replace(/>/g, '&gt;')
    s = s.replace(/'/g, '&apos;')
    s = s.replace(/"/g, '&quot;')
    // s = s.replace(/  /g, '&nbsp;')
    // s = s.replace(/\n/g, '<br>')
    return s
}
export default htmlspecialchars
