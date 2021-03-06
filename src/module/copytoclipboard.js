import { Toast } from 'vant'

const copytoclipboard = s => {
    if (window.clipboardData) {
        window.clipboardData.setData('text', s)
    } else {
        (s => {
            document.oncopy = e => {
                e.clipboardData.setData('text', s)
                e.preventDefault()
                document.oncopy = null
            }
        })(s);
        document.execCommand('Copy')
    }
    Toast({
        message: 'ε€εΆζε',
        position: 'bottom',
    });
}

export default copytoclipboard
