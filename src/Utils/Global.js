import {Alert, StatusBar} from 'react-native'

global.message = (title = '', message = '') => {
  Alert.alert(
    title,
    message,
    [
      {
        text: 'ok',
        style: 'cancel'
      }
    ],
    {cancelable: false}
  )
}
