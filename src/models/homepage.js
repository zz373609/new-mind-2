export default {
  namespace: 'homepage',

  state: {
    language: 'zh',
    showProjectMenu: false,
    showMusicPlayer: false
  },

  subscriptions: {
    setup ({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname }) => { // eslint-disable-line

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
