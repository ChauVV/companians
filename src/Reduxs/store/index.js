import {applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger'
import createSagaMiddleWare from 'redux-saga'
import {persistStore} from 'redux-persist'
// Root action reducer
import rootReducer from '../reducers'
// Root action saga
import rootSaga from '../actionSaga/rootSaga'

import {LogBox} from 'react-native'

const sagaMiddleWare = createSagaMiddleWare()
let middleWare = [sagaMiddleWare]

if (process.env.NODE_ENV === 'development') {
  middleWare.push(logger)
  LogBox.ignoreLogs(['Warning: ...'])
}

const store = createStore(rootReducer, applyMiddleware(...middleWare))
const persistor = persistStore(store)

export default {store, persistor}

export {store, persistor}

sagaMiddleWare.run(rootSaga)
