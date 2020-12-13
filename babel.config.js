module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.js', '.ios.js', '.android.js'],
        alias: {
          utils: './src/Utils',
          reduxs: './src/Reduxs',
          assets: './src/Assets',
          screens: './src/Screens',
          components: './src/Components',
          navigations: './src/Navigations',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
