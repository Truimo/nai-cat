import axios from './http.js'
import qs from 'qs'

const api = {
    get(url, params) {
        return axios.get(url, {
            params: params
        })
    },
    post(url, params) {
        return axios.post(url, qs.stringify(params), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    },
    form(url, data) {
        return axios({
            method: 'post',
            url: url,
            data: data,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    this(config) {
        return axios(config)
    }
}

export default api
