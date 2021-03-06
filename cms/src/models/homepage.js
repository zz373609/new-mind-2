import {
  fetchProducts,
  fetchArticles,
  fetchMusics,
  updateProduct,
  putArticle,
  postMusics,
  puthMusics,
  deleteMusics,
  deleteArticle,
  fetchNews,
  addNews,
  updateNews,
  deleteNews
} from '../services/server'
import { message } from 'antd'

export default {
  namespace: 'homepage',

  state: {
    products: [],
    articles: [],
    musics: [],
    newses: []
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
        } else if (pathname == '/news') {
          dispatch({
            type: 'getNews'
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
    *getNews({ payload }, { call, put, select, take, all }) {
      let res = yield call(fetchNews)
      yield put({
        type: 'updateValue',
        payload: {
          key: 'newses',
          val: res.data.newses.map((item, index) => {
            item.key = item._id
            return item
          })
        }
      })
    },
    *deleteArticleServer({ payload }, { call, put, select, take, all }) {
      try {
        yield call(deleteArticle, payload)
        yield put({
          type: 'getArticles'
        })
        message.success('删除成功')
      } catch (error) {
        message.success('删除失败')
      }
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
    },
    *newNews({ payload }, { call, put, select, take, all }) {
      try {
        yield call(addNews)
        yield put({
          type: 'getNews'
        })
        message.success('创建成功')
      } catch (error) {
        message.error('创建失败')
      }
    },
    *putNews({ payload }, { call, put, select, take, all }) {
      try {
        yield call(updateNews, payload.id, payload.data)
        yield put({
          type: 'getNews'
        })
        message.success('更新成功')
      } catch (error) {
        message.error('更新失败')
      }
    },
    *deleteNews({ payload }, { call, put, select, take, all }) {
      try {
        yield call(deleteNews, payload)
        yield put({
          type: 'getNews'
        })
        message.success('删除成功')
      } catch (error) {
        message.error('删除失败')
      }
    },
    *putProduct({ payload }, { call, put, select, take, all }) {
      try {
        yield call(updateProduct, payload.id, payload.data)
        yield put({
          type: 'getProducts'
        })
        message.success('修改商品成功')
      } catch (error) {
        message.success('修改失败')
      }
    },
    *putArticle({ payload }, { call, put, select, take, all }) {
      try {
        yield call(putArticle, payload.id, payload.data)
        message.success('保存文章成功')
      } catch (error) {
        message.success('保存文章失败')
      }
    },
    *putMusic({ payload }, { call, put, select, take, all }) {
      try {
        yield call(puthMusics, payload.id, payload.data)
        message.success('修改音乐成功')
        yield put({
          type: 'getMusics'
        })
      } catch (error) {
        message.success('修改音乐失败')
      }
    },
    *newMusic({ payload }, { call, put, select, take, all }) {
      try {
        yield call(postMusics)
        message.success('创建音乐成功')
        yield put({
          type: 'getMusics'
        })
      } catch (error) {
        message.success('创建音乐失败')
      }
    },
    *deleteMusics({ payload }, { call, put, select, take, all }) {
      try {
        yield call(deleteMusics, payload)
        message.success('删除音乐成功')
        yield put({
          type: 'getMusics'
        })
      } catch (error) {
        message.success('删除音乐失败')
      }
    }
  },

  reducers: {
    updateValue(state, { payload }) {
      return Object.assign({}, state, { [payload.key]: payload.val })
    }
  }
}
