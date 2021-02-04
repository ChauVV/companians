/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {
  createStackNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators
} from '@react-navigation/stack'
import {connect} from 'react-redux'

import Icon from 'react-native-vector-icons/FontAwesome'

import Announcements from 'screens/Announcements'
// import AddAnnouncements from 'screens/AddAnnouncements'
import Feeds from 'screens/Feeds'
import SignIn from 'screens/SignIn'
import SignUp from 'screens/SignUp'
import ForgotPassword from 'screens/ForgotPassword'
import Profile from 'screens/Profile'

import Colors from 'utils/Colors'
import AddAnnouncements from 'screens/AddAnnouncements'
import NavigationServices from 'utils/NavigationServices'

const MyTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({current, next, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateY: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.height, 0]
            })
          },
          // {
          //   rotate: current.progress.interpolate({
          //     inputRange: [0, 1],
          //     outputRange: [1, 0]
          //   })
          // },
          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.5]
                })
              : 1
          }
        ]
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5]
        })
      }
    }
  }
}

const BottomTab = createBottomTabNavigator()

const Stack = createStackNavigator()

const ENABLE_TAB_COLOR = 'white'
const DISABLE_TAB_COLOR = 'gray'

const MyTabBar = ({state, descriptors, navigation, user}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options

  if (focusedOptions.tabBarVisible === false) {
    return null
  }
  const route0 = state.routes[0]
  const route2 = state.routes[1]

  const tab0 = () => {
    const {options} = descriptors[route0.key]
    const {icName} = options

    const isFocused = state.index === 0

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route0.key,
        canPreventDefault: true
      })

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route0.name)
      }
    }

    const onLongPress = () => {
      navigation.emit({
        type: 'tabLongPress',
        target: route0.key
      })
    }

    return (
      <TouchableOpacity
        activeOpacity={1}
        key={route0.key.toString()}
        accessibilityRole="button"
        accessibilityState={isFocused ? {selected: true} : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={onPress}
        onLongPress={onLongPress}
        style={[styles.tab]}>
        <Icon
          style={{
            marginLeft: 60
          }}
          name={icName}
          size={30}
          color={isFocused ? ENABLE_TAB_COLOR : DISABLE_TAB_COLOR}
        />
      </TouchableOpacity>
    )
  }
  const tab2 = () => {
    const {options} = descriptors[route2.key]
    const {icName} = options

    const isFocused = state.index === 1

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route2.key,
        canPreventDefault: true
      })

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route2.name)
      }
    }

    const onLongPress = () => {
      navigation.emit({
        type: 'tabLongPress',
        target: route2.key
      })
    }

    return (
      <TouchableOpacity
        activeOpacity={1}
        key={route2.key.toString()}
        accessibilityRole="button"
        accessibilityState={isFocused ? {selected: true} : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={onPress}
        onLongPress={onLongPress}
        style={[styles.tab]}>
        <Icon
          style={{
            marginRight: 60
          }}
          name={icName}
          size={30}
          color={isFocused ? ENABLE_TAB_COLOR : DISABLE_TAB_COLOR}
        />
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.tabBar}>
      {tab0()}
      <TouchableOpacity
        activeOpacity={0}
        key={'tab1'}
        accessibilityRole="button"
        onPress={() => navigation.navigate('AddAnnouncements')}
        style={[styles.tab]}>
        <Icon name={'plus-square'} size={30} color={ENABLE_TAB_COLOR} />
      </TouchableOpacity>
      {tab2()}
    </View>
  )
}

const Tabbar = () => {
  return (
    <BottomTab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <BottomTab.Screen
        name="Feeds"
        component={Feeds}
        options={{
          tabBarLabel: 'Feeds',
          icName: 'home'
        }}
      />
      <BottomTab.Screen
        name="Announcements"
        component={Announcements}
        options={{tabBarLabel: 'Announcements', icName: 'star'}}
      />
    </BottomTab.Navigator>
  )
}

const AuthorzationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: 'Sign Up',
          headerBackTitleVisible: false
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerBackTitleVisible: false, title: 'Forgot Password'}}
      />
    </Stack.Navigator>
  )
}

const RootNavigation = (props) => {
  const accessToken = props.user.accessToken

  return (
    <NavigationContainer ref={NavigationServices.navigationRef}>
      <Stack.Navigator
        initialRouteName={accessToken ? 'Tabbar' : 'AuthorzationStack'}
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name="AuthorzationStack"
          component={AuthorzationStack}
          options={{
            tabBarLabel: 'AuthorzationStack'
          }}
        />
        <Stack.Screen
          name="Tabbar"
          component={Tabbar}
          options={{
            tabBarLabel: 'Tabbar'
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile'
          }}
        />
        <Stack.Screen
          name="AddAnnouncements"
          component={AddAnnouncements}
          options={{
            tabBarLabel: 'AddAnnouncements',
            ...MyTransition
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// -- REDUX STORE
function mapPropsToStates(store) {
  return {
    user: store.user
  }
}

export default connect(mapPropsToStates, null)(RootNavigation)

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: Colors.header,
    height: 60,
    paddingBottom: 10
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 2
  },
  container: {
    flex: 1
  }
})
