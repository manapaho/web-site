import path from 'path';
import webpack from 'webpack';
import _ from 'lodash';
import config from './webpack';

// The entry point for the bundle.
// If you pass an object: Multiple entry bundles are created. The key is the chunk name.
// The value can be a string or an array.
config.entry = _.merge(config.entry, {
  index: [
    './index'
  ]
});

// Add additional plugins to the compiler.
config.plugins = _.union(config.plugins, [
  // http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
]);

export default config;
