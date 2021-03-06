import qs from 'qs'
import { fetchProduct, fetchProductone, fetchArticle, fetchMusics,fetchNeses } from '../services/server'
export default {
  namespace: 'homepage',

  state: {
    language: 'en',
    showProjectMenu: false,
    showMusicPlayer: false,
    columnKey: 0,
    articleId: null,
    navIndex: 0,
    topSrc: 'http://images.shinemeditation.cn/top_mobile.png',
    product: [],
    productone: {},
    articles: [],
    article: {},
    musics: [],
    newses:[]
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname, search }) => { // eslint-disable-line
        dispatch({
          type: 'Product'
        })
        if (pathname.indexOf('/project') > -1) {
          dispatch({
            type: 'ProductOne',
            payload: pathname.replace('/project/', '')
          })
        }
        if (pathname.indexOf('/column/articles/') > -1 && pathname.replace('/column/articles/', '').length) {
          dispatch({
            type: 'ArticleOne',
            payload: pathname.replace('/column/articles/', '')
          })
        }
        if (pathname.indexOf('/column/news') > -1) {
          dispatch({
            type: 'Newses'
          })
        }
        if (pathname.indexOf('/column/music') > -1) {
          dispatch({
            type: 'Musics'
          })
        }
        if (search) {
          let { language } = qs.parse(search, { ignoreQueryPrefix: true })
          if (language) {
            dispatch({
              type: 'updateState',
              payload: {
                key: 'language',
                value: language
              }
            })
          }
        }
        let columnKey = 0
        let navIndex
        switch (pathname) {
          case '/column/articles':
            dispatch({
              type: 'Articlefetch',
              payload: 'all'
            })
            columnKey = 0
            navIndex = 2
            break
          case '/column/music':
            columnKey = 1
            navIndex = 2
            break
          case '/column/news':
            columnKey = 2
            navIndex = 2
            break
          case '/':
            navIndex = 0
            break
          case '/about':
            navIndex = 3
            break
          case '/contact':
            navIndex = 4
            break
          default:
            navIndex = 1
        }
        if (pathname.indexOf('/column/articles') > -1) {
          navIndex = 2
        }
        dispatch({
          type: 'updateState',
          payload: {
            key: 'columnKey',
            value: columnKey
          }
        })
        dispatch({
          type: 'updateState',
          payload: {
            key: 'navIndex',
            value: navIndex
          }
        })
      })
    }
  },

  effects: {
    *Product({ payload }, { call, put, select, take }) {
      try {
        let res = yield call(fetchProduct)
        yield put({
          type: 'updateState',
          payload: {
            key: 'product',
            value: res.data.products
          }
        })
      } catch (error) {
        console.log(error)
      }
    },
    *ProductOne({ payload }, { call, put, select, take }) {
      try {
        let param = {
          id: payload
        }
        let res = yield call(fetchProductone, param)
        yield put({
          type: 'updateState',
          payload: {
            key: 'productone',
            value: res.data.product
          }
        })
      } catch (error) {
        console.log(error)
      }
    },
    *Musics({ payload }, { call, put, select, take }) {
      try {
        let res = yield call(fetchMusics)
        yield put({
          type: 'updateState',
          payload: {
            key: 'musics',
            value: res.data.musics
          }
        })
      } catch (error) {

      }
    },
    *Newses({ payload }, { call, put, select, take }) {
      try {
        let res = yield call(fetchNeses)
        yield put({
          type: 'updateState',
          payload: {
            key: 'newses',
            value: res.data.newses
          }
        })
      } catch (error) {

      }
    },
    *Articlefetch({ payload }, { call, put, select, take }) {
      try {
        let param = {
          id: payload
        }
        let res = yield call(fetchArticle, param)
        yield put({
          type: 'updateState',
          payload: {
            key: 'articles',
            value: res.data.articles
          }
        })
      } catch (error) {

      }
    },
    *ArticleOne({ payload }, { call, put, select, take }) {
      console.log(payload)
      try {
        let param = {
          id: payload
        }
        let res = yield call(fetchArticle, param)
        yield put({
          type: 'updateState',
          payload: {
            key: 'article',
            value: res.data.article
          }
        })
      } catch (error) {

      }
    }
  },
  reducers: {
    updateState(state, { payload }) {
      let ustate = JSON.parse(JSON.stringify(state))
      ustate[payload.key] = payload.value
      return ustate
    }
  }
}
