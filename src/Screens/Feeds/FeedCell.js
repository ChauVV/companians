import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import Dash from 'components/Dash'
import {FontAwesomeIcon, IoniconsIcon} from 'utils/VectorIcons'
import Colors from 'utils/Colors'

class FeedCell extends React.PureComponent {
  render() {
    const {item} = this.props

    return (
      <View style={styles.cell}>
        {/* Header */}
        <View style={styles.cellAvatar}>
          <View style={styles.avatarView}>
            <Image style={styles.avatar} source={{uri: item.avatarPoster}} />
          </View>
          <View style={styles.posterInfo}>
            <View style={styles.nameDescriptionView}>
              <Text style={styles.nameDescription}>
                <Text style={styles.avatarName}>{item.namePoster} </Text>
                <Text style={styles.cellHeaderDescription}>is at ACB</Text>
              </Text>
            </View>
            <Text style={styles.clocaton}>@location</Text>
          </View>
          <Text style={styles.chTime}>1h ago</Text>
        </View>
        <Text style={styles.cellDescription}>
          {
            'Thêm ngày cho chuyến đi của bạn để nhận thông tin về chính sách hủy cho đặt phòng này.'
          }
        </Text>
        {/* Middle */}
        <View style={styles.imageView}>
          <Image style={styles.cellImage} source={{uri: item.image}} />
        </View>
        <Dash
          style={styles.dash}
          dashThickness={0.5}
          dashColor={Colors.lightGray}
        />
        {/* Bottom */}
        <View style={styles.cellActions}>
          <View style={styles.likeView}>
            <FontAwesomeIcon name="heart" />
            <Text style={styles.textCount}>273</Text>
          </View>
          <View style={styles.groubBtn}>
            <TouchableOpacity style={styles.cellBtn}>
              <IoniconsIcon name="pin" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cellBtn}>
              <FontAwesomeIcon name="ellipsis-h" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export default FeedCell

const AVATAR_VIEW_WIDTH = 38
const AVATAR_WIDTH = 34

const AVATAR_VIEW_WIDTH_SUB = 22
const AVATAR_WIDTH_SUB = 18

const styles = StyleSheet.create({
  cellBtn: {
    marginLeft: 10
  },
  textCount: {
    marginLeft: 10
  },
  dash: {
    width: '100%',
    marginTop: 10
  },
  cellSeparator: {
    borderColor: Colors.lightGray,
    borderTopWidth: 2,
    height: 10,
    borderStyle: 'dotted'
  },
  groubBtn: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  likeView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cellActions: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
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
    fontSize: 16,
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
    backgroundColor: 'white',
    paddingVertical: 15,
    marginHorizontal: 10,
    marginBottom: 20,

    shadowColor: '#2e2e2e',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 3
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
