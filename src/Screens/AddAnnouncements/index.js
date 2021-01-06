import React from 'react'
import {View, StyleSheet, Dimensions} from 'react-native'

const AddAnnouncements = () => {
  console.log('AddAnnouncements')
  return <View style={styles.container} />
}

export default AddAnnouncements

const styles = StyleSheet.create({
  title: {
    fontSize: 40
  },
  container: {
    flex: 1,
    backgroundColor: 'green'
  }
})
