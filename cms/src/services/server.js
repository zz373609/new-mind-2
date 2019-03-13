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

export function fetchArticle(id) {
  return fetch.get(`${host}${api}/article/${id}`)
}

export function putArticle(id, payload) {
  return fetch.put(`${host}${api}/article/${id}`, payload)
}

export function fetchMusics() {
  return fetch.get(`${host}${api}/music/all`)
}

export function puthMusics(id, payload) {
  return fetch.put(`${host}${api}/music/${id}`, payload)
}

export function postMusics() {
  return fetch.post(`${host}${api}/music/new`)
}

export function deleteMusics(id) {
  return fetch.delete(`${host}${api}/music/${id}`)
}

export function getToken(key) {
  return fetch.get(`${host}${api}/feature/get_token?key=${key}`)
}

export function insertArticle(id, payload) {
  return fetch.post(`${host}${api}/article/${id}`, payload)
}

export function updateArticle(id, payload) {
  return fetch.put(`${host}${api}/article/${id}`, payload)
}

export function deleteArticle(id) {
  return fetch.delete(`${host}${api}/article/${id}`)
}

export function updateProduct(id, payload) {
  return fetch.put(`${host}${api}/product/${id}`, payload)
}
