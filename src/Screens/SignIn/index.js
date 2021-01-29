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
import {getStatusBarHeight} from 'utils/StatusBarHeight'
import Images from 'assets/Images'
import APIUtils from 'utils/apiUtils'
import Spinner from 'react-native-spinkit'
import * as Constants from 'utils/Constants'
import AsyncStorage from 'react-native-simple-store'

const scHeight = Dimensions.get('window').height
const scWidth = Dimensions.get('window').width

const SignIn = (props) => {
  const [username, setUsename] = useState('')
  const [password, setPasswords] = useState('')
  const [remember, setRemember] = useState(false)
  const [loading, setLoading] = useState(false)

  const signIn = async () => {
    try {
      if (username.length === 0 || password.length === 0) {
        return
      }

      setLoading(true)
      const body = {
        usernameOrEmailAddress: username,
        password: password
      }

      const url = global.BASE_URL + 'api/TokenAuth/Authenticate'
      const rp = await APIUtils.post(url, {body})

      setLoading(false)
      if (rp.data.success) {
        AsyncStorage.save(Constants.USER_LOGIN_KEY, rp.data.result)
        props.navigation.reset({
          index: 0,
          routes: [{name: 'Tabbar'}]
        })
      } else {
        global.message('Error', rp.data.error.message)
      }
    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.pane} pointerEvents={loading ? 'none' : 'box-none'}>
          <Text style={styles.title}>Member Login</Text>
          <Text style={styles.subTitle}>Welcome to Companians</Text>

          {/* <View style={styles.socialIcons}>
            <Image source={Images.icFacebook} style={styles.socialIcon} />
            <Image source={Images.icGoogle64} style={styles.socialIcon} />
            <Image source={Images.icTwitter64} style={styles.socialIcon} />
          </View> */}
          <Image source={Images.loginImg} style={styles.loginImg} />

          <View style={styles.inputPane}>
            <Text style={styles.inputTitle}>ACCOUNT</Text>
            <View style={styles.inputView}>
              <Icon name={'user'} color={'black'} size={20} />
              <TextInput
                style={[styles.input]}
                value={username}
                onChangeText={setUsename}
                placeholder={'Your account'}
              />
            </View>
          </View>

          <View style={[styles.inputPane, styles.passwordPane]}>
            <View style={styles.passwordHeader}>
              <Text style={styles.inputTitle}>PASSWORD</Text>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => props.navigation.navigate('ForgotPassword')}>
                <Text style={styles.forgetPassword}>forgot password?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inputView}>
              <Icon name={'key'} color={'black'} size={20} />
              <TextInput
                style={[styles.input]}
                value={password}
                onChangeText={setPasswords}
                placeholder={'Your password'}
                secureTextEntry={true}
                onSubmitEditing={() => signIn()}
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
                  size={25}
                  color={'green'}
                  style={styles.icCheck}
                />
              )}
            </View>
            <Text style={styles.rememberMe}>Remember me</Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={username.length === 0 || password.length === 0}
            style={styles.btnSignIn}
            onPress={() => signIn()}>
            {loading ? (
              <Spinner
                style={styles.spinner}
                size={40}
                type={'ThreeBounce'}
                color={'white'}
              />
            ) : (
              <Text
                style={[
                  styles.btnSignInText,
                  (username.length === 0 || password.length === 0) &&
                    styles.disabledBtn
                ]}>
                Sign In
              </Text>
            )}
          </TouchableOpacity>

          <View style={styles.signup}>
            <Text style={styles.signupDescription}>Join with us?</Text>
            <TouchableOpacity
              style={styles.btnSignup}
              onPress={() => props.navigation.navigate('SignUp')}>
              <Text style={styles.btnSignupText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  spinner: {
    marginBottom: 10
  },
  loginImg: {
    width: (scWidth / 5) * 4,
    height: scWidth / 2,
    alignSelf: 'center',
    borderRadius: 15,
    marginBottom: 40
  },
  disabledBtn: {
    opacity: 0.5
  },
  btnSignupText: {
    color: 'green',
    fontSize: 15,
    fontWeight: 'bold'
  },
  signupDescription: {
    color: 'gray',
    fontSize: 15,
    marginRight: 5
  },
  signup: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 15
  },
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
    right: 0
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
    fontWeight: '600',
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
    height: scHeight - getStatusBarHeight(),
    marginTop: 40
  },
  container: {
    flex: 1
  }
})
