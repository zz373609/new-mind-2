
export default {
  namespace: 'homepage',

  state: {
    language: 'zh',
    showProjectMenu: false,
    showMusicPlayer: false,
    columnKey: 0,
    articleId: null
  },

  subscriptions: {
    setup ({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname }) => { // eslint-disable-line
        let columnKey = 0
        switch (pathname) {
          case '/column/articles':
            columnKey = 0
            break
          case '/column/music':
            columnKey = 1
            break
          case '/column/news':
            columnKey = 2
            break
        }
        dispatch({
          type: 'updateState',
          payload: {
            key: 'columnKey',
            value: columnKey
          }
        })
      })
    }
  },

  effects: {

  },

  reducers: {
    updateState (state, { payload }) {
      console.log('update')
      state[payload.key] = payload.value
      console.log(state)
      return state
    }
  }
}
