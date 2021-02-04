import key from '../lib/constants'
import init from '../lib/initState'

const user = function (state = init.user, action) {
  switch (action.type) {
    case key.SET_USER: {
      console.log('user reducer: ', action)
      return action.payload
    }
    default:
      return state
  }
}

export default user
