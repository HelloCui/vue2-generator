import axios from 'axios'

var instance = axios.create({
  baseURL: $conf.baseUrl
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
