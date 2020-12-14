import React from 'react'
import {View, StyleSheet, Dimensions} from 'react-native'

const Feeds = () => {
  console.log('Feeds')
  return <View style={styles.container} />
}

export default Feeds

const styles = StyleSheet.create({
  title: {
    fontSize: 40
  },
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    minHeight: 300
  }
})
