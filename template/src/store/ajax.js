import axios from 'axios'

var instance = axios.create({
    baseURL: $conf.baseUrl
});

// 请求拦截器
instance.interceptors.request.use(function(config) {
    return config;
}, function(error) {
    return Promise.reject(error)
})

/* 返回拦截器
axios的拦截器有个奇怪的设定：如果没有reject则认为成功，即使是在失败回调函数里面也这样。
但有些错误处理（比如登出和断网）希望在拦截器里面处理后不再往外抛，这时需要中断promise，
虽然axios官方不建议这么做，但有个取巧的方案是返回一个空的promise：return new Promise(() => {})
*/
instance.interceptors.response.use(function(response) {
    return response.data
}, function(error) {
    if (error.response) {
        // 请求已发送，服务器回复状态码在2xx之外
        console.error(error.response)
    } else if (error.request) {
        // 请求已发送，但没有收到回应
        console.error(error.request)
    } else {
        // 请求尚未发送就失败了，可以认为是某些设置引发的问题（代码问题、跨域、断网）
        // 建议错误在这里拦截处理，中断promise
        // return new Promise(() => {})
        console.error(error)
    }
    return Promise.reject(error)
});


export default instance
// Instance methods
// request(config)
// get(url[, config])
// delete(url[, config])
// head(url[, config])
// post(url[, data[, config]])
// put(url[, data[, config]])
// patch(url[, data[, config]])

// config 主要属性
// {
//   // `url` is the server URL that will be used for the request
//   url: '/user',
//   // `method` is the request method to be used when making the request
//   method: 'get', // default
//   // `baseURL` will be prepended to `url` unless `url` is absolute.
//   // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
//   // to methods of that instance.
//   baseURL: 'https://some-domain.com/api/',
//   // `headers` are custom headers to be sent
//   headers: {'X-Requested-With': 'XMLHttpRequest'},
//   // `params` are the URL parameters to be sent with the request
//   // Must be a plain object or a URLSearchParams object
//   params: {
//     ID: 12345
//   },
//   // `data` is the data to be sent as the request body
//   // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
//   // When no `transformRequest` is set, must be of one of the following types:
//   // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
//   // - Browser only: FormData, File, Blob
//   // - Node only: Stream
//   data: {
//     firstName: 'Fred'
//   },
//   // `timeout` specifies the number of milliseconds before the request times out.
//   // If the request takes longer than `timeout`, the request will be aborted.
//   timeout: 1000,
//   // `responseType` indicates the type of data that the server will respond with
//   // options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
//   responseType: 'json', // default
//   }
// }

// 详细请参考 https://github.com/mzabriskie/axios
