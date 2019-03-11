import fetch from '../utils/request'

let host, api
const mode = process.env.NODE_ENV

if (mode === 'development') {
  host = ''
  api = '/proxy/api/v1'
}

if (mode === 'production') {
  host = ''
  api = '/api/v1'
}

export function fetchProducts() {
  return fetch.get(`${host}${api}/product/all`)
}

export function fetchArticles() {
  return fetch.get(`${host}${api}/article/all`)
}

export function fetchMusics() {
  return fetch.get(`${host}${api}/music/all`)
}

export function getToken(key) {
  return fetch.get(`${host}${api}/feature/get_token?key=${key}`)
}
