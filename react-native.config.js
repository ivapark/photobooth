
module.exports = {
  dependencies: {
    'react-native': {
      platforms: {
        ios: {
          podspecPath: './node_modules/react-native/React.podspec',  // Make sure this points to the correct podspec
        },
      },
    },
    // Add other dependencies or custom configurations here
  },
  reactNativePath: './node_modules/react-native', // Ensure this points to the correct path for React Native
};
