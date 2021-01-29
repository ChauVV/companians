import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Colors from 'utils/Colors'
import {HEADER_HEIGHT} from 'utils/Constants'
import {STATUS_BAR_HEIGHT} from 'utils/StatusBarHeight'
import NavigationServices from 'utils/NavigationServices'

const Header = ({
  Left,
  Right,
  Center,
  isLeft = false,
  isRight = false,
  isCenter = false
}) => {
  const bagdeCount = 12

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.left}>
          {(Left && Left()) ||
            (isLeft && (
              <FontAwesome
                name={'user-circle'}
                color={'white'}
                size={26}
                onPress={() => NavigationServices.navigate('Profile')}
              />
            ))}
        </View>
        <View style={styles.center}>
          {(Center && Center()) ||
            (isCenter && <Text style={{color: 'white'}}>Companians</Text>)}
        </View>
        <View style={styles.right}>
          {(Right && Right()) ||
            (isRight && (
              <>
                <TouchableOpacity activeOpacity={1}>
                  <FontAwesome name={'search'} color={'white'} size={18} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.notiView} activeOpacity={1}>
                  <FontAwesome name={'bell'} color={'white'} size={18} />
                  <View style={styles.bagdeView}>
                    <Text style={styles.bagdeCount}>
                      {bagdeCount > 99 ? 'N' : bagdeCount}
                    </Text>
                  </View>
                </TouchableOpacity>
              </>
            ))}
        </View>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  bagdeCount: {
    color: 'white',
    fontSize: 10,
    fontWeight: '600'
  },
  bagdeView: {
    backgroundColor: Colors.statusBar,
    justifyContent: 'center',
    alignItems: 'center',
    height: 16,
    width: 16,
    borderRadius: 8,
    position: 'absolute',
    top: -5,
    right: -3
  },
  notiView: {
    marginLeft: 15,
    paddingRight: 5
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 15
  },
  center: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 15
  },
  header: {
    width: '100%',
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    backgroundColor: 'black'
  },
  container: {
    paddingTop: STATUS_BAR_HEIGHT,
    backgroundColor: Colors.statusBar
  }
})
