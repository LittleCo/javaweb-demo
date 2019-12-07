import axios from 'axios'

axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencodedcharset=UTF-8'


/**
 * @description: GET 方法 对应 GET 请求
 * @param {String} url [请求的url]
 * @return: {Object} [response] 
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * @description: POST 
 * @param {String} url
 * @return {Object}
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        console.log(err)
        console.log(err.response)
        resolve(err.response.data)
      })
  })
}