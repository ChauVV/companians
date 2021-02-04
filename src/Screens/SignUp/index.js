import React, {useState} from 'react'
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import APIUtils from 'utils/apiUtils'
import Spinner from 'react-native-spinkit'
import * as Constants from 'utils/Constants'
import AsyncStorage from 'react-native-simple-store'
import Images from 'assets/Images'
import {connect} from 'react-redux'
import constants from 'reduxs/lib/constants'

const scWidth = Dimensions.get('window').width

const SignUp = (props) => {
  const [nickName, setNickName] = useState('')
  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agree, setAgree] = useState(true)
  const [loading, setLoading] = useState(false)

  const signup = async () => {
    try {
      setLoading(true)
      const body = {
        name: 'lastName',
        surname: 'firstName',
        userName: nickName,
        emailAddress: email,
        password: password
      }
      const url = global.BASE_URL + 'api/services/app/Account/Register'
      const rp = await APIUtils.post(url, {body})

      if (rp.data.success) {
        const bodyLogin = {
          usernameOrEmailAddress: nickName,
          password: password
        }

        const urlLogin = global.BASE_URL + 'api/TokenAuth/Authenticate'
        const rpLogin = await APIUtils.post(urlLogin, {body: bodyLogin})

        setLoading(false)
        if (rpLogin.data.success) {
          AsyncStorage.save(Constants.USER_LOGIN_KEY, rpLogin.data.result)
          props.setUser(rp.data.result)
          props.navigation.reset({
            index: 0,
            routes: [{name: 'Tabbar'}]
          })
        } else {
          global.message('Error', rpLogin.data.error.message)
        }
      } else {
        setLoading(false)
        global.message('Error', rp.data.error.message)
      }
    } catch (error) {
      setLoading(true)
    }
  }

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.pane} pointerEvents={loading ? 'none' : 'box-none'}>
          <Image source={Images.loginImg3} style={styles.loginImg} />

          <View style={styles.inputPane}>
            <Text style={styles.inputTitle}>Account</Text>
            <View style={styles.inputView}>
              <TextInput
                style={[styles.input]}
                value={nickName}
                onChangeText={setNickName}
                placeholder={'Account'}
              />
            </View>
          </View>

          <View style={styles.inputPane}>
            <View style={styles.passwordHeader}>
              <Text style={styles.inputTitle}>Email</Text>
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={[styles.input]}
                value={email}
                onChangeText={setEmail}
                placeholder={'Email'}
              />
            </View>
          </View>

          <View style={styles.inputPane}>
            <View style={styles.passwordHeader}>
              <Text style={styles.inputTitle}>Password</Text>
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={[styles.input]}
                value={password}
                onChangeText={setPassword}
                placeholder={'Password'}
                secureTextEntry={true}
              />
            </View>
          </View>

          <View style={styles.inputPane}>
            <Text style={styles.inputTitle}>Confirm Password</Text>
            <View style={styles.inputView}>
              <TextInput
                style={[styles.input]}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder={'Confirm Password'}
                secureTextEntry={true}
              />
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={1}
            style={styles.btnRememberMe}
            onPress={() => setAgree(!agree)}>
            <View style={styles.checkBoxView}>
              <View style={styles.checkBox} />
              {agree && (
                <Icon
                  name="check"
                  size={25}
                  color={'green'}
                  style={styles.icCheck}
                />
              )}
            </View>
            <Text style={styles.rememberMe}>I agree to all</Text>
            <TouchableOpacity style={[styles.btnSignup]} onPress={() => {}}>
              <Text style={styles.btnSignupText}>Terms</Text>
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={
              nickName.length === 0 ||
              email.length === 0 ||
              password.length === 0 ||
              confirmPassword.length === 0 ||
              !agree
            }
            onPress={() => signup()}
            style={[
              styles.btnSignIn,
              (nickName.length === 0 ||
                email.length === 0 ||
                password.length === 0 ||
                confirmPassword.length === 0 ||
                !agree) &&
                styles.disableSignUp
            ]}>
            {loading ? (
              <Spinner
                style={styles.spinner}
                size={40}
                type={'ThreeBounce'}
                color={'white'}
              />
            ) : (
              <Text style={styles.btnSignInText}>Sign Up</Text>
            )}
          </TouchableOpacity>

          <View style={styles.signup}>
            <Text style={styles.signupDescription}>
              Already have an account?
            </Text>
            <TouchableOpacity
              style={styles.btnSignup}
              onPress={() => props.navigation.navigate('SignIn')}>
              <Text style={styles.btnSignupText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
}

const mapPropsToStates = (store) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch({type: constants.SET_USER, payload: user})
  }
}

export default connect(mapPropsToStates, mapDispatchToProps)(SignUp)

const styles = StyleSheet.create({
  spinner: {
    marginBottom: 10
  },
  loginImg: {
    width: (scWidth / 5) * 4,
    height: scWidth / 2,
    alignSelf: 'center',
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 10
  },
  disableSignUp: {
    opacity: 0.5
  },
  inputPane: {
    marginTop: 10
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
    marginTop: 10
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
    marginTop: 40,
    marginBottom: 40,
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
    fontSize: 14,
    marginRight: 5
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
    fontWeight: 'bold',
    marginBottom: 50
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
    height: 45
  },
  pane: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})
