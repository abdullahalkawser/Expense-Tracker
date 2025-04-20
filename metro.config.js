const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

// Get the default Expo config
const config = getDefaultConfig(__dirname);

// Apply both Reanimated and NativeWind configurations
const reanimatedConfig = wrapWithReanimatedMetroConfig(config);
const finalConfig = withNativeWind(reanimatedConfig, { input: './global.css' });

module.exports = finalConfig;
