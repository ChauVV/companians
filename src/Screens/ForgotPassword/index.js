import React, {useState} from 'react'
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {getStatusBarHeight} from 'utils/StatusBarHeight'

const ForgotPassword = (props) => {
  const [email, setEmail] = useState('')

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.pane}>
          <View style={styles.inputPane}>
            <Text style={styles.inputTitle}>YOUR EMAIL</Text>
            <View style={styles.inputView}>
              <TextInput
                style={[styles.input]}
                value={email}
                onChangeText={setEmail}
                placeholder={'Your email'}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.btnSignIn}>
            <Text style={styles.btnSignInText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
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
    alignItems: 'center',
    marginBottom: 400
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
    alignSelf: 'center',
    marginBottom: 25
  },
  input: {
    flex: 1,
    height: 45
  },
  pane: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height - getStatusBarHeight()
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})
