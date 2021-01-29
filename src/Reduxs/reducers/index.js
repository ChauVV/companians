import * as globalReducers from './globalReducers'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  ...globalReducers
})

export default rootReducer
