'use strict'

import {applyMiddleware, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import createSagaMiddleWare from 'redux-saga'
import {middlewareNav} from './AppNavigator'
// Root action reducer
import rootReducer from '../reducers'
// Root action saga
import rootSaga from '../actionSaga/rootSaga'

import {LogBox} from 'react-native'

const sagaMiddleWare = createSagaMiddleWare()
let middleWare = [sagaMiddleWare]
middleWare.push(thunkMiddleware)
middleWare.push(middlewareNav)

if (process.env.NODE_ENV === 'development') {
  middleWare.push(logger)
  LogBox.ignoreLogs(['Warning: ...'])
}

const store = createStore(rootReducer, applyMiddleware(...middleWare))

sagaMiddleWare.run(rootSaga)

export default store
