/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/FontAwesome'

import Announcements from 'screens/Announcements'
import Feeds from 'screens/Feeds'
import SignIn from 'screens/SignIn'
import SignUp from 'screens/SignUp'
import ForgotPassword from 'screens/ForgotPassword'

const BottomTab = createBottomTabNavigator()

const Stack = createStackNavigator()

function MyTabBar({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options

  if (focusedOptions.tabBarVisible === false) {
    return null
  }

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key]
        const {icName} = options
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key
          })
        }

        return (
          <TouchableOpacity
            activeOpacity={0}
            key={route.key.toString()}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tab]}>
            <Icon
              name={icName}
              size={30}
              color={isFocused ? '#673ab7' : 'gray'}
            />
            {/* <Text style={{color: isFocused ? '#673ab7' : 'gray'}}>{label}</Text> */}
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

function Tabbar() {
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

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'AuthorzationStack'}
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name="AuthorzationStack"
          component={AuthorzationStack}
          options={{
            tabBarLabel: 'AuthorzationStack',
            icName: 'home'
          }}
        />
        <Stack.Screen
          name="Tabbar"
          component={Tabbar}
          options={{
            tabBarLabel: 'Tabbar',
            icName: 'home'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row'
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
