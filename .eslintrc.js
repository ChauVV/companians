module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'semi': [2, "never"],
    "react/no-did-mount-set-state": [2, 2]
  }
};
