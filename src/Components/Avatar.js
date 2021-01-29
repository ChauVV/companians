import React from 'react'
import {View, StyleSheet, Image} from 'react-native'
import PropTypes from 'prop-types'
import Images from 'assets/Images'

const Avatar = ({avatarHeight, avatarStyle}) => {
  return (
    <View
      style={[
        styles.container,
        {
          height: avatarHeight + 10,
          width: avatarHeight + 10
        },
        avatarStyle
      ]}>
      <View
        style={[
          styles.avatarOutLine,
          {
            height: avatarHeight + 5,
            width: avatarHeight + 5,
            borderRadius: (avatarHeight + 5) / 2
          }
        ]}>
        <Image
          resizeMode={'contain'}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8FjkMjrydaslGcTUCTe9YN2jGMFppZOO2Vw&usqp=CAU'
          }}
          style={[
            styles.img,
            {
              height: avatarHeight,
              width: avatarHeight,
              borderRadius: avatarHeight / 2
            }
          ]}
        />
      </View>
    </View>
  )
}

Avatar.defaultProps = {
  avatarHeight: 200,
  avatarStyle: {}
}

Avatar.propTypes = {
  avatarHeight: PropTypes.number,
  avatarStyle: PropTypes.object
}

export default Avatar

const styles = StyleSheet.create({
  img: {
    backgroundColor: 'rgba(0,0,0,0.1)'
  },
  container: {
    padding: 5
  },
  avatarOutLine: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
