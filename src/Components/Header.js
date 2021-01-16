import React from 'react'
import {
  View,
  StyleSheet,
  Platform,
  Text,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  StatusBar
} from 'react-native'
import Dash from 'components/Dash'
import {FontAwesomeIcon} from 'utils/VectorIcons'
import Colors from 'utils/Colors'
import {HEADER_HEIGHT} from 'utils/Constants'
import {STATUS_BAR_HEIGHT} from 'utils/StatusBarHeight'

const Header = () => {
  const bagdeCount = 12

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.left}>
          <FontAwesomeIcon name={'user-circle'} color={'white'} size={26} />
        </View>
        <View style={styles.center}>
          <Text style={{color: 'white'}}>center</Text>
        </View>
        <View style={styles.right}>
          <TouchableOpacity activeOpacity={1}>
            <FontAwesomeIcon name={'search'} color={'white'} size={18} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notiView} activeOpacity={1}>
            <FontAwesomeIcon name={'bell'} color={'white'} size={18} />
            <View style={styles.bagdeView}>
              <Text style={styles.bagdeCount}>
                {bagdeCount > 99 ? 'N' : bagdeCount}
              </Text>
            </View>
          </TouchableOpacity>
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
    marginLeft: 10,
    paddingRight: 5
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10
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
    paddingRight: 10
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
