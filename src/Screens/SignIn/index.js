import React, {useState} from 'react'
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

import Images from 'assets/Images'

const SignIn = () => {
  const [usename, setUsename] = useState('')
  const [passwords, setPasswords] = useState('')
  const [remember, setRemember] = useState(false)

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.pane}>
          <Text style={styles.title}>Member Login</Text>
          <Text style={styles.subTitle}>Welcome to Companians</Text>

          <View style={styles.socialIcons}>
            <Image source={Images.icFacebook} style={styles.socialIcon} />
            <Image source={Images.icGoogle64} style={styles.socialIcon} />
            <Image source={Images.icTwitter64} style={styles.socialIcon} />
          </View>

          <View style={styles.inputPane}>
            <Text style={styles.inputTitle}>ACCOUNT</Text>
            <View style={styles.inputView}>
              <Icon name={'user'} color={'black'} size={20} />
              <TextInput
                style={[styles.input]}
                value={usename}
                onChangeText={setUsename}
                placeholder={'Your account'}
              />
            </View>
          </View>

          <View style={[styles.inputPane, styles.passwordPane]}>
            <View style={styles.passwordHeader}>
              <Text style={styles.inputTitle}>PASSWORD</Text>
              <Text style={styles.forgetPassword}>forgot password?</Text>
            </View>
            <View style={styles.inputView}>
              <Icon name={'key'} color={'black'} size={20} />
              <TextInput
                style={[styles.input]}
                value={passwords}
                onChangeText={setPasswords}
                placeholder={'Your password'}
                secureTextEntry={true}
              />
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={1}
            style={styles.btnRememberMe}
            onPress={() => setRemember(!remember)}>
            <View style={styles.checkBoxView}>
              <View style={styles.checkBox} />
              {remember && (
                <Icon
                  name="check"
                  size={22}
                  color={'green'}
                  style={styles.icCheck}
                />
              )}
            </View>
            <Text style={styles.rememberMe}>Remember me</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnSignIn}>
            <Text style={styles.btnSignInText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  btnSignInText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  btnSignIn: {
    height: 40,
    width: '30%',
    backgroundColor: 'green',
    borderRadius: 5,
    marginVertical: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkBoxView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30
  },
  icCheck: {
    position: 'absolute',
    right: 2
  },
  rememberMe: {
    marginLeft: 10,
    fontSize: 14
  },
  checkBox: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 3,
    width: 15,
    height: 15
  },
  btnRememberMe: {
    width: '80%',
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  forgetPassword: {
    fontSize: 12,
    color: 'gray'
  },
  passwordHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  socialIcon: {
    width: 64,
    height: 64,
    marginHorizontal: 15
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50
  },
  subTitle: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 40
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  passwordPane: {
    marginTop: 30
  },
  inputView: {
    height: 45,
    width: '80%',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: 'lightgreen',
    alignItems: 'center',
    paddingHorizontal: 17,

    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowColor: 'lightgreen',
    shadowRadius: 1,
    elevation: 4
  },
  inputTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5
  },
  input: {
    flex: 1,
    height: 45,
    marginLeft: 17
  },
  pane: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  container: {
    flex: 1
  }
})
