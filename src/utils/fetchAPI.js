import axios from 'axios'

const FetchApi = (method, url, params, TokenValue) => {
  if (process.env.REACT_APP_SERVER_ENVIORNMENT === 'dev') {
    url = 'http://localhost:' + process.env.REACT_APP_SERVER_PORT + url
  } else {
    url = 'https://api.esummit.in/' + url
  }
  return new Promise((resolve, reject) => {
    if (TokenValue) {
      axios({
        method: method,
        url: url,
        data: params,
        headers: {
          Authorization: 'JWT ' + TokenValue
        },
        responseType: 'json'
      })
        .then(res => resolve(res))
        .catch(err => reject(err))
    } else {
      axios({
        method: method,
        url: url,
        data: params,
        responseType: 'json'
      })
        .then(res => resolve(res))
        .catch(err => reject(err))
    }
  })
}

export default FetchApi
