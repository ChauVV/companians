/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import {View, StyleSheet, Image, Dimensions} from 'react-native'
import {IcOptions} from 'utils/VectorIcons'
import Colors from 'utils/Colors'

class Feeds extends React.PureComponent {
  render() {
    const item = {}

    return (
      <>
        <View style={styles.groupMember}>
          <View style={[styles.avatarViewSub, {zIndex: 1}]}>
            <Image style={styles.avatarSub} source={{uri: item.avatarPoster}} />
          </View>
          <View
            style={[
              styles.avatarViewSub,
              {zIndex: 2, marginLeft: AVATAR_SUB_MARGIN_LEFT}
            ]}>
            <Image style={styles.avatarSub} source={{uri: item.avatarPoster}} />
          </View>
          <View
            style={[
              styles.avatarViewSub,
              {zIndex: 3, marginLeft: 2 * AVATAR_SUB_MARGIN_LEFT}
            ]}>
            <Image style={styles.avatarSub} source={{uri: item.avatarPoster}} />
          </View>
          <View
            style={[
              styles.avatarViewSub,
              {zIndex: 4, marginLeft: 3 * AVATAR_SUB_MARGIN_LEFT}
            ]}>
            <Image style={styles.avatarSub} source={{uri: item.avatarPoster}} />
          </View>
        </View>
        <View style={styles.cOptionsView}>
          <IcOptions
            size={20}
            color={'black'}
            onPress={() => console.log('onPress cell option')}
          />
        </View>
      </>
    )
  }
}

export default Feeds

const AVATAR_VIEW_WIDTH = 38
const AVATAR_WIDTH = 34

const AVATAR_VIEW_WIDTH_SUB = 22
const AVATAR_WIDTH_SUB = 18
const AVATAR_SUB_MARGIN_LEFT = 13

const styles = StyleSheet.create({
  clocaton: {
    color: 'green'
  },
  itemSeparatorComponent: {
    height: 10,
    flex: 1,
    backgroundColor: Colors.lightGray
  },
  nameDescription: {},
  posterInfo: {
    marginHorizontal: 5,
    flex: 1
  },
  cellHeaderDescription: {
    fontSize: 16,
    fontWeight: '400'
  },
  btnViewText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white'
  },
  btnView: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 5
  },
  avatarSub: {
    width: AVATAR_WIDTH_SUB,
    height: AVATAR_WIDTH_SUB,
    borderRadius: AVATAR_WIDTH_SUB / 2,
    backgroundColor: 'gray'
  },
  avatarViewSub: {
    width: AVATAR_VIEW_WIDTH_SUB,
    height: AVATAR_VIEW_WIDTH_SUB,
    borderRadius: AVATAR_VIEW_WIDTH_SUB / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'black',
    position: 'absolute'
  },
  avatarName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5
  },
  avatar: {
    width: AVATAR_WIDTH,
    height: AVATAR_WIDTH,
    borderRadius: AVATAR_WIDTH / 2,
    backgroundColor: 'gray'
  },
  avatarView: {
    width: AVATAR_VIEW_WIDTH,
    height: AVATAR_VIEW_WIDTH,
    borderRadius: AVATAR_VIEW_WIDTH / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'black'
  },
  cellAvatar: {
    flexDirection: 'row',
    marginBottom: 5,
    marginHorizontal: 10
  },
  cellDescription: {
    marginVertical: 10,
    fontSize: 14,
    marginHorizontal: 10
  },
  cellDate: {
    fontSize: 14,
    fontWeight: '600'
  },
  cellTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  cell: {
    marginBottom: 50,
    backgroundColor: 'white',
    paddingVertical: 10,
    marginHorizontal: 10
  },
  cellImage: {
    width: Dimensions.get('window').width - 40,
    height: ((Dimensions.get('window').width - 20) / 5) * 3,
    marginBottom: 5,
    marginHorizontal: 10,
    backgroundColor: '#E0A4A3'
  },
  title: {
    fontSize: 40
  },
  flatlist: {
    backgroundColor: Colors.lightGray,
    paddingVertical: 10
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})
