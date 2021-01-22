import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'

export const FontAwesomeIcon = ({name, color, size, onPress}) => (
  <FontAwesome
    name={name || 'home'}
    onPress={onPress || null}
    size={size || 20}
    color={color || 'gray'}
  />
)

export const IoniconsIcon = ({name, color, size, onPress}) => (
  <Ionicons
    name={name || 'home'}
    onPress={onPress || null}
    size={size || 20}
    color={color || 'gray'}
  />
)
