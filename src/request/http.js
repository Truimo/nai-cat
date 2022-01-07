import axios from 'axios'

let instance = axios.create({
    baseURL: 'https://req.truimo.com/yixi/',
    withCredentials: false
})

// 请求拦截器
instance.interceptors.request.use(function (config) {
    return Promise.resolve(config)
}, function (error) {
    // 请求错误
    return Promise.reject(error)
})

// 响应拦截器
instance.interceptors.response.use(function (response) {
    // 响应数据
    return Promise.resolve(response)
}, function (error) {
    // 响应错误
    if (error && error.response) {
        console.log('Api response error.')
        console.log(error.response)
    }
    return Promise.reject(error)
})

export default instance
