import createReducer from '../lib/reducerConfig'
import key from '../lib/constants'
import init from '../lib/initState'

export const isLogined = createReducer(init.isLogined, {
  [key.SET_LOGINED](state, action) {
    return action.payload
  }
})
export const token = createReducer(init.token, {
  [key.SET_TOKEN](state, action) {
    return action.payload
  }
})
