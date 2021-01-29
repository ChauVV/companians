import * as React from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text
} from 'react-native'
import {TabView, SceneMap, TabBar} from 'react-native-tab-view'
import {FontAwesomeIcon, IoniconsIcon} from 'utils/VectorIcons'
import Animated from 'react-native-reanimated'

const FirstRoute = () => <View style={[styles.scene]} />

const SecondRoute = () => <View style={[styles.scene]} />

const initialLayout = {width: Dimensions.get('window').width}

const ROUTES = [
  {key: 'first', title: 'First'},
  {key: 'second', title: 'Second'},
  {key: 'ba', title: 'ba'}
]

class ProfileTabbar extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      tabIndex: 0
    }
  }

  render() {
    const {tabIndex} = this.state

    const renderScene = SceneMap({
      first: FirstRoute,
      second: SecondRoute,
      ba: SecondRoute
    })

    return (
      <TabView
        navigationState={{index: tabIndex, routes: ROUTES}}
        renderScene={renderScene}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={styles.tabbar}
            indicatorStyle={styles.indicatorStyle}
            renderIcon={({route, focused}) => {
              switch (route.key) {
                case 'first':
                  return (
                    <FontAwesomeIcon
                      name={'star'}
                      color={focused ? 'black' : 'gray'}
                    />
                  )
                case 'second':
                  return (
                    <IoniconsIcon
                      name={'save'}
                      color={focused ? 'black' : 'gray'}
                    />
                  )
                case 'ba':
                  return (
                    <IoniconsIcon
                      name={'pin'}
                      color={focused ? 'black' : 'gray'}
                    />
                  )
              }
            }}
            renderLabel={({route, focused, color}) => <View />}
          />
        )}
        onIndexChange={(idx) => {
          this.setState({tabIndex: idx})
          this.props.onChangeTab(idx)
        }}
        initialLayout={initialLayout}
      />
    )
  }
}
export default ProfileTabbar

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: 'white',
    borderTopWidth: 0.3,
    borderColor: 'lightgray'
  },
  indicatorStyle: {
    backgroundColor: 'black',
    height: 0.5
  },
  scene: {
    flex: 1
  },
  tabBar: {
    flexDirection: 'row'
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16
  }
})
