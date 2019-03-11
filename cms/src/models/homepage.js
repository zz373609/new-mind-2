import { fetchProducts, fetchArticles, fetchMusics } from '../services/server'

export default {
  namespace: 'homepage',

  state: {
    products: [],
    articles: [],
    musics: []
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname }) => { // eslint-disable-line
        if (pathname == '/') {
          dispatch({
            type: 'getProducts'
          })
        } else if (pathname == '/article') {
          dispatch({
            type: 'getArticles'
          })
        } else if (pathname == '/music') {
          dispatch({
            type: 'getMusics'
          })
        }
      })
    }
  },

  effects: {
    *getProducts({ payload }, { call, put, select, take, all }) { // eslint-disable-line
      let res = yield call(fetchProducts)
      yield put({
        type: 'updateValue',
        payload: {
          key: 'products',
          val: res.data.products.map((item, index) => {
            item.key = item._id
            return item
          })
        }
      })
    },
    *getArticles({ payload }, { call, put, select, take, all }) {
      let res = yield call(fetchArticles)
      yield put({
        type: 'updateValue',
        payload: {
          key: 'articles',
          val: res.data.articles.map((item, index) => {
            item.key = item._id
            return item
          })
        }
      })
    },
    *getMusics({ payload }, { call, put, select, take, all }) {
      let res = yield call(fetchMusics)
      yield put({
        type: 'updateValue',
        payload: {
          key: 'musics',
          val: res.data.musics.map((item, index) => {
            item.key = item._id
            return item
          })
        }
      })
    }

  },

  reducers: {
    updateValue(state, { payload }) {
      return Object.assign({}, state, { [payload.key]: payload.val })
    }
  }
}
