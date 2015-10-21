import path from 'path';
import webpack from 'webpack';
import _ from 'lodash';
import config from './webpack';

// The entry point for the bundle.
// If you pass an object: Multiple entry bundles are created. The key is the chunk name.
// The value can be a string or an array.
config.entry = _.merge(config.entry, {
  index: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './index'
  ]
});

// Add additional plugins to the compiler.
config.plugins = _.union(config.plugins, [
  // https://webpack.github.io/docs/list-of-plugins.html#occurenceorderplugin
  new webpack.optimize.OccurenceOrderPlugin(),
  // https://webpack.github.io/docs/list-of-plugins.html#hotmodulereplacementplugin
  new webpack.HotModuleReplacementPlugin(),
  // https://github.com/webpack/webpack/issues/701
  new webpack.OldWatchingPlugin(),
  // https://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
  new webpack.optimize.DedupePlugin(),
  // https://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
  new webpack.NoErrorsPlugin()
]);

// Used to configure the behaviour of webpack-dev-server when the webpack config is passed to webpack-dev-server CLI.
config.devServer = {
  // add some colors to the output.
  colors: true,
  // don’t output anything to the console.
  quiet: false,
  // suppress boring information.
  noInfo: false,
  // The output.path from the view of the Javascript / HTML page.
  publicPath: config.output.publicPath,
  // Set this as true if you want to access dev server from arbitrary url.
  // This is handy if you are using a html5 router.
  historyApiFallback: true,
  // also adds the webpack/hot/dev-server entry.
  hot: true
};

// Choose a developer tool to enhance debugging.
// https://webpack.github.io/docs/configuration.html#devtool
config.devtool = 'eval';

// Switch loaders to debug mode.
config.debug = true;

export default config;
