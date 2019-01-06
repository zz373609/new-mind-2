import qs from 'qs'
export default {
  namespace: 'homepage',

  state: {
    language: 'zh',
    showProjectMenu: false,
    showMusicPlayer: false,
    columnKey: 0,
    articleId: null,
    navIndex: 0,
    topSrc: 'http://pkndszzxq.bkt.clouddn.com//image/backgroundtop/topbackground.png'
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname, search }) => { // eslint-disable-line
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

  },

  reducers: {
    updateState(state, { payload }) {
      state[payload.key] = payload.value
      return state
    }
  }
}
