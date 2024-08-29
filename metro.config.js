const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

const __dirname = path.resolve(path.dirname(''));
const config = getDefaultConfig(__dirname)

module.exports = withNativeWind(config, { input: './global.css' })