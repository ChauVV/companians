import userReducers from './userReducers'

import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage
}

const rootReducer = combineReducers({
  user: userReducers
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: hardSet,
  whitelist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export default persistedReducer
