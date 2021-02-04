/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import {StatusBar} from 'react-native'
import {Provider} from 'react-redux'
import Colors from 'utils/Colors'
import {store, persistor} from 'reduxs/store'
import {PersistGate} from 'redux-persist/integration/react'
import './setting'
import 'utils/Global'

import RootNavigator from 'navigations'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={Colors.statusBar}
        />
        <RootNavigator />
      </PersistGate>
    </Provider>
  )
}

export default App
