import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

export const FontAwesomeIcon = ({name, color, size, onPress}) => (
  <Icon
    name={name || 'home'}
    onPress={onPress || null}
    size={size || 30}
    color={color || 'gray'}
  />
)

export const IcFeeds = ({color, size}) => (
  <Icon name="home" size={size || 30} color={color || 'gray'} />
)
export const IcAnnouncements = ({color, size}) => (
  <Icon name="folder" size={size || 30} color={color || 'gray'} />
)
export const IcOptions = ({color, size, onPress}) => (
  <Icon
    onPress={onPress || null}
    name="ellipsis-h"
    size={size || 30}
    color={color || 'gray'}
  />
)
