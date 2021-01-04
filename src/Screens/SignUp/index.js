import React, {useState} from 'react'
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

const SignUp = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [nickName, setNickName] = useState('')
  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [remember, setRemember] = useState(false)

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.pane}>
          <View style={styles.inputPane}>
            <Text style={styles.inputTitle}>First Name</Text>
            <View style={styles.inputView}>
              <TextInput
                style={[styles.input]}
                value={firstName}
                onChangeText={setFirstName}
                placeholder={'First Name'}
              />
            </View>
          </View>

          <View style={styles.inputPane}>
            <View style={styles.passwordHeader}>
              <Text style={styles.inputTitle}>Last Name</Text>
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={[styles.input]}
                value={lastName}
                onChangeText={setLastName}
                placeholder={'Last Name'}
                secureTextEntry={true}
              />
            </View>
          </View>

          <View style={styles.inputPane}>
            <Text style={styles.inputTitle}>Nick Name</Text>
            <View style={styles.inputView}>
              <TextInput
                style={[styles.input]}
                value={nickName}
                onChangeText={setNickName}
                placeholder={'Nick Name'}
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
                secureTextEntry={true}
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
            <Text style={styles.rememberMe}>I agree to all</Text>
            <TouchableOpacity style={styles.btnSignup} onPress={() => {}}>
              <Text style={styles.btnSignupText}>Terms</Text>
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnSignIn}>
            <Text style={styles.btnSignInText}>Sign Up</Text>
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

export default SignUp

const styles = StyleSheet.create({
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
