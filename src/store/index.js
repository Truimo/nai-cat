import {createStore} from 'vuex'
import {cookie} from '@/module/storage'

export default createStore({
  state: {
      token: ''
  },
  mutations: {

  },
  actions: {
      getToken: (state) => {
          return state.prod.map(() => {
              let token = ''
              if (typeof Storage == "undefined") {
                  token = cookie.get('token')
              }
              return {
                  token: token
              }
          })
      }
  },
  modules: {
  }
})
