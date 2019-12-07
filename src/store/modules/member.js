import { login } from '../../api/member'

const state = {
  USER: {
    name: '',
    inviteID: '',
    createTime: '',
    fadeTime: '',
    message: ''
  },
  TOKEN: '',
  testContent: '测试 Vuex Getter',
  todos: [
    {
      id: 1,
      title: 'todo-1'
    },
    {
      id: 2,
      title: 'todo-2'
    } 
  ]
}
const getters = {
  memberInfo: (state) => state.USER,
  getToken: (state) => state.TOKEN,
  getTestContent: (state) => state.testContent,
  allTodos: (state) => state.todos
}
const actions = {
  async userLogin({ commit }, name, password) {
    login({
      name: name,
      password: password
    })
      .then(res => {
        if(res.state) {
          commit('saveUserInfo', res)
        } else {
          commit('loginError', res.data.message)
        }
      })
  }
}
const mutations = {
  saveUserInfo: (state, response) => {
    const { mName, inviteId, fadeTime, createTime } = response.data
    state.USER.name = mName
    state.USER.inviteID = inviteId
    state.USER.createTime = createTime
    state.USER.fadeTime = fadeTime
    state.TOKEN = response.token
  },
  loginError: (state, message) => {
    state.USER.message = message
  }
}

export default {
  state, 
  getters,
  actions,
  mutations
}