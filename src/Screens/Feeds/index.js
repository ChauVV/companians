import React from 'react'
import {View, StyleSheet, FlatList, Dimensions} from 'react-native'
import Colors from 'utils/Colors'
import FeedCell from './FeedCell'
import Header from 'components/Header'

const feedAPI = 'https://5dda31555730550014fe75fa.mockapi.io/Post'

class Feeds extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      data: []
    }
  }

  async componentDidMount() {
    try {
      const re = await fetch(feedAPI, {method: 'GET'})
      const data = await re.json()
      this.setState({isLoading: false, data})
    } catch (error) {
      console.log('error: ', error)
    }
  }

  render() {
    const {data} = this.state

    return (
      <View style={styles.container}>
        <Header isLeft isRight isCenter />
        <FlatList
          data={data}
          style={styles.flatlist}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({item}) => <FeedCell item={item} />}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </View>
    )
  }
}

export default Feeds

const AVATAR_VIEW_WIDTH = 38
const AVATAR_WIDTH = 34

const AVATAR_VIEW_WIDTH_SUB = 22
const AVATAR_WIDTH_SUB = 18

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingVertical: 15
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
    backgroundColor: 'white'
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
    marginBottom: 50,
    backgroundColor: 'white',
    paddingVertical: 15,
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
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})
