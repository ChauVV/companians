/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import {StatusBar} from 'react-native'
import Colors from 'utils/Colors'
import './setting'
import 'utils/Global'

import RootNavigator from 'navigations'

const App = () => {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.statusBar}
      />
      <RootNavigator />
    </>
  )
}

export default App
