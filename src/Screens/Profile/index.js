import React from 'react'
import Header from 'components/Header'
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView
} from 'react-native'
import {FontAwesomeIcon, IoniconsIcon} from 'utils/VectorIcons'
import NavigationServices from 'utils/NavigationServices'
import Images from 'assets/Images'
import Avatar from 'components/Avatar'
import Colors from 'utils/Colors'
import ProfileTabs from './ProfileTabs'

const AVATART_HEIGHT = 130
const IMAGE_HEADER_HEIGHT = 200
const MARGIN_LEFT_AVATAR = 20
class Profile extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {tabIndex: 0}
  }

  Left = () => {
    return (
      <View style={styles.left}>
        <FontAwesomeIcon
          onPress={() => NavigationServices.goBack()}
          name="chevron-circle-left"
          color={'white'}
          size={26}
        />
      </View>
    )
  }

  HeaderList = () => {
    return (
      <View style={styles.headerList}>
        <Avatar
          avatarStyle={styles.avatarStyle}
          avatarHeight={AVATART_HEIGHT}
        />
        <Image source={Images.login3} style={styles.imgHeader} />
        <View style={styles.listHeader}>
          <View style={styles.nameView}>
            <Text style={styles.name}>Anh Thu</Text>
            <Text style={styles.bio}>Love bad boys</Text>
          </View>

          <View style={styles.followView}>
            <View style={styles.followByView}>
              <Text style={styles.followByName}>Admired By</Text>
              <Text style={styles.followByCount}>1255</Text>
            </View>
            <View style={styles.fill} />
            <View style={styles.followingView}>
              <Text style={styles.followByName}>Admire</Text>
              <Text style={styles.followByCount}>1255</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

  render() {
    const {tabIndex} = this.state
    console.log('tabIndex: ', tabIndex === 0, tabIndex === 1, tabIndex === 2)
    return (
      <View style={styles.container}>
        <Header Left={this.Left} />

        <ScrollView>
          {this.HeaderList()}
          <ProfileTabs onChangeTab={(idx) => this.setState({tabIndex: idx})} />
          {tabIndex === 0 ? (
            <View
              style={{
                width: Dimensions.get('window').width,
                height: 700
              }}
            />
          ) : tabIndex === 1 ? (
            <View
              style={{
                width: Dimensions.get('window').width,
                height: 200
              }}
            />
          ) : (
            <View
              style={{
                width: Dimensions.get('window').width,
                height: 100
              }}
            />
          )}
        </ScrollView>
      </View>
    )
  }
}

export default Profile

const styles = StyleSheet.create({
  headerList: {
    backgroundColor: 'white'
  },
  fill: {
    flex: 1
  },
  nameView: {
    width: AVATART_HEIGHT + MARGIN_LEFT_AVATAR * 2,
    // marginLeft: MARGIN_LEFT_AVATAR / 2,
    marginTop: AVATART_HEIGHT / 2 + 15,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  followByName: {
    fontSize: 12,
    color: 'gray'
  },
  followByCount: {
    fontSize: 12,
    color: 'black'
  },
  followByView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 80,
    paddingVertical: 5,
    marginLeft: 20
  },
  followingView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 80,
    paddingVertical: 5,
    marginRight: 20
  },
  followView: {
    flexDirection: 'row',
    position: 'absolute',
    top: -20
  },
  bio: {
    color: 'gray',
    fontSize: 14,
    textAlign: 'left'
  },
  name: {
    textAlign: 'left',
    color: Colors.statusBar,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 2
  },
  imgHeader: {
    height: IMAGE_HEADER_HEIGHT,
    width: '100%'
  },
  listHeader: {
    paddingBottom: 20
  },
  cell: {
    width: '100%',
    height: 50,
    marginBottom: 10,
    backgroundColor: 'yellow'
  },
  contentOutLine: {
    flex: 1
  },
  avatarStyle: {
    top: IMAGE_HEADER_HEIGHT - AVATART_HEIGHT / 2,
    alignSelf: 'center',
    // marginLeft: MARGIN_LEFT_AVATAR,
    position: 'absolute',
    zIndex: 2,
    elevation: 5
  },
  content: {
    flex: 1,
    marginTop: AVATART_HEIGHT / 2,
    width: '100%',
    height: 20000,
    backgroundColor: 'white'
  },
  left: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  container: {
    flex: 1
  }
})
