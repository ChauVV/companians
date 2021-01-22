import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

class Profile extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{}}>Profile</Text>
      </View>
    )
  }
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
