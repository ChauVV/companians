import React from 'react'
import {Dimensions, StyleSheet, View, FlatList, Animated} from 'react-native'

import {STATUS_BAR_HEIGHT} from 'utils/StatusBarHeight'
import PropTypes from 'prop-types'

const screen = Dimensions.get('window')
const FlatListPropTypes = FlatList.propTypes

class ParallaxView extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {}
    this.scrollY = new Animated.Value(0)
  }

  renderBackground = () => {
    const {windowHeight, backgroundSource} = this.props
    const {scrollY} = this
    if (!windowHeight || !backgroundSource) {
      return null
    }
    return (
      <Animated.Image
        style={[
          styles.background,
          {
            height: windowHeight,
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-windowHeight, 0, windowHeight],
                  outputRange: [windowHeight / 2, 0, -windowHeight / 3]
                })
              },
              {
                scale: scrollY.interpolate({
                  inputRange: [-windowHeight, 0, windowHeight],
                  outputRange: [2, 1, 1]
                })
              }
            ]
          }
        ]}
        source={backgroundSource}
      />
    )
  }

  renderHeader = () => {
    var {windowHeight, backgroundSource, avatarHeight} = this.props
    var {scrollY} = this
    if (!windowHeight || !backgroundSource) {
      return null
    }
    console.log('scrolly: ', scrollY)
    return (
      <Animated.View
        style={[
          styles.header,
          {
            height: windowHeight - STATUS_BAR_HEIGHT - avatarHeight,
            opacity: scrollY.interpolate({
              inputRange: [-windowHeight, 0, windowHeight / 1.2],
              outputRange: [1, 1, 0]
            })
          }
        ]}>
        <View />
      </Animated.View>
    )
  }

  render() {
    const {style, ...props} = this.props
    return (
      <View style={[styles.container, style]}>
        {this.renderBackground()}
        {this.props.header}
        <FlatList
          ref={(component) => {
            this._scrollView = component
          }}
          {...props}
          style={styles.scrollView}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.scrollY}}}],
            {useNativeDriver: false}
          )}
          scrollEventThrottle={16}
          ListHeaderComponent={this.renderHeader()}>
          <View style={[styles.content, props.scrollableViewStyle]}>
            {this.props.children}
          </View>
        </FlatList>
      </View>
    )
  }
}

ParallaxView.defaultProps = {
  windowHeight: 300,
  avatarHeight: 0,
  contentInset: {
    top: screen.scale
  }
}

ParallaxView.propTypes = {
  ...FlatListPropTypes,
  windowHeight: PropTypes.number,
  avatarHeight: PropTypes.number,
  backgroundSource: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string
    }),
    PropTypes.number
  ]),
  header: PropTypes.node,
  blur: PropTypes.string,
  contentInset: PropTypes.object,
  data: PropTypes.array
}

const styles = StyleSheet.create({
  header: {
    position: 'relative'
  },
  container: {
    flex: 1,
    borderColor: 'transparent'
  },
  scrollView: {
    backgroundColor: 'transparent'
  },
  background: {
    top: STATUS_BAR_HEIGHT,
    position: 'absolute',
    backgroundColor: 'lightblue',
    width: screen.width,
    resizeMode: 'cover'
  },
  blur: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'transparent'
  },
  content: {
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'column'
  }
})

module.exports = ParallaxView
