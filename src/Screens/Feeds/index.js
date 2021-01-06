import React from 'react'
import {View, StyleSheet, FlatList, Text, Image, SafeAreaView, Dimensions} from 'react-native'
import Moment from 'moment';

const feedAPI = 'https://5dda31555730550014fe75fa.mockapi.io/Post'

const renderItem = ({item}) => {
  console.log('item: ', item);
  return(
    <View style={styles.cell}>
      <View style={styles.cellAvatar}>
        <View style={styles.avatarView}>
          <Image style={styles.avatar} source={{uri: item.avatarPoster}}/>
        </View>
        <Text style={styles.avatarName}>{item.namePoster}</Text>
      </View>
      <View style={styles.imageView}>
        <Image style={styles.cellImage} source={{uri: item.image}}/>
        <View style={styles.btnView}>
          <Text style={styles.btnViewText}>Join</Text>
        </View>
      </View>
      <Text style={styles.cellTitle}>{item.title}</Text>
      <Text style={styles.cellDate}>{`${Moment(item.startDate).format('MMM Do YYYY, h:mm:ss a')} - ${Moment(item.endDate).format('MMM Do YYYY, h:mm:ss a')}`}</Text>
      <Text style={styles.cellDescription}>{'Thêm ngày cho chuyến đi của bạn để nhận thông tin về chính sách hủy cho đặt phòng này. Chủ nhà không cho phép mang theo thú cưng, tổ chức tiệc tùng hoặc hút thuốc.'}</Text>
      <View style={styles.groupMember}>
          <View style={[styles.avatarViewSub, {zIndex: 1}]}>
            <Image style={styles.avatarSub} source={{uri: item.avatarPoster}}/>
          </View>
          <View style={[styles.avatarViewSub, {zIndex: 2, marginLeft: AVATAR_SUB_MARGIN_LEFT}]}>
            <Image style={styles.avatarSub} source={{uri: item.avatarPoster}}/>
          </View>
          <View style={[styles.avatarViewSub, {zIndex: 3, marginLeft: 2*AVATAR_SUB_MARGIN_LEFT}]}>
            <Image style={styles.avatarSub} source={{uri: item.avatarPoster}}/>
          </View>
          <View style={[styles.avatarViewSub, {zIndex: 4, marginLeft: 3*AVATAR_SUB_MARGIN_LEFT}]}>
            <Image style={styles.avatarSub} source={{uri: item.avatarPoster}}/>
          </View>
      
      </View>
    </View>
  )
}
class Feeds extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      data: []
    }
  }

  async componentDidMount() {
    const re = await fetch(feedAPI, {method: 'GET'})
    const data = await re.json()
    this.setState({isLoading: false, data})
  }

  render() {
    const {data} = this.state

    return (
      <SafeAreaView style={styles.container} >
      <FlatList

        data={data}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
      />
    </SafeAreaView>
    )
  }
}

export default Feeds


const LIST_PADDING_HORIZONTAL = 15
const AVATAR_VIEW_WIDTH = 38
const AVATAR_WIDTH = 34

const AVATAR_VIEW_WIDTH_SUB = 22
const AVATAR_WIDTH_SUB = 18
const AVATAR_SUB_MARGIN_LEFT = 13

const styles = StyleSheet.create({
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
    borderRadius: AVATAR_WIDTH_SUB/2,
    backgroundColor: 'gray'
  },
  avatarViewSub: {
    width: AVATAR_VIEW_WIDTH_SUB,
    height: AVATAR_VIEW_WIDTH_SUB,
    borderRadius: AVATAR_VIEW_WIDTH_SUB/2,
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
    borderRadius: AVATAR_WIDTH/2,
    backgroundColor: 'gray'
  },
  avatarView: {
    width: AVATAR_VIEW_WIDTH,
    height: AVATAR_VIEW_WIDTH,
    borderRadius: AVATAR_VIEW_WIDTH/2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'black',
  },
  cellAvatar: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  cellDescription: {
    marginVertical: 7,
    fontSize: 14
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
    paddingHorizontal: LIST_PADDING_HORIZONTAL
  },
  cellImage: {
    width: Dimensions.get('window').width - LIST_PADDING_HORIZONTAL*2,
    height: (Dimensions.get('window').width - LIST_PADDING_HORIZONTAL*2)/5*3,
    marginBottom: 5,
    backgroundColor: '#E0A4A3',

    borderRadius: 10
  },
  title: {
    fontSize: 40
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})
