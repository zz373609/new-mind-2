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

export function fetchProduct() {
  return fetch.get(`${host}${api}/product/all`)
}

export function fetchProductone(param) {
  return fetch.get(`${host}${api}/product/${param.id}`)
}

export function fetchArticle(param) {
  return fetch.get(`${host}${api}/article/${param.id}`)
}

export function fetchMusics() {
  return fetch.get(`${host}${api}/music/all`)
}

export function fetchNeses(){
  return fetch.get(`${host}${api}/news/all`)
}

export function fetchPages(){
  return fetch.get(`${host}${api}`)
}
