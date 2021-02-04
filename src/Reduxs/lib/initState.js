const initState = {
  isLogined: false,
  language: 'vi',
  internet: true,
  user: {
    accessToken: null,
    encryptedAccessToken: null,
    expireInSeconds: 1000000,
    passwordResetCode: null,
    refreshToken: null,
    requiresTwoFactorVerification: false,
    returnUrl: null,
    shouldResetPassword: false,
    twoFactorAuthProviders: null,
    twoFactorRememberClientToken: null,
    userId: null
  }
}

export default initState
