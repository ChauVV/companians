import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

export const FontAwesomeIcon = ({name, color, size}) => (
  <Icon name={name || 'home'} size={size || 30} color={color || 'gray'} />
)

export const IcFeeds = ({color, size}) => (
  <Icon name="home" size={size || 30} color={color || 'gray'} />
)
export const IcAnnouncements = ({color, size}) => (
  <Icon name="folder" size={size || 30} color={color || 'gray'} />
)
