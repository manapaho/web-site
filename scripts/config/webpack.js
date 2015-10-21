import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import semverRegex from 'semver-regex';
import _ from 'lodash';
import pkg from '../../package.json';

var config = {
  // The base directory (absolute path!) for resolving the entry option.
  // If output.pathinfo is set, the included pathinfo is shortened to this directory.
  context: path.join(__dirname, '../../src'),
  // The entry point for the bundle.
  // If you pass an object: Multiple entry bundles are created. The key is the chunk name.
  // The value can be a string or an array.
  entry: {},
  // If you use any hashing ([hash] or [chunkhash]) make sure to have a consistent ordering of modules.
  // Use the OccurenceOrderPlugin or recordsPath.
  output: {
    // The output directory as absolute path (required).
    // [hash] is replaced by the hash of the compilation.
    path: path.join(__dirname, '../../dist'),
    // The filename of the entry chunk as relative path inside the output.path directory.
    // [name] is replaced by the name of the chunk.
    // [hash] is replaced by the hash of the compilation.
    // [chunkhash] is replaced by the hash of the chunk.
    // You must not specify an absolute path here! Use the output.path option.
    filename: '[name].js',
    // The output.path from the view of the Javascript / HTML page.
    publicPath: ''
  },
  // Specify dependencies that shouldn’t be resolved by webpack, but should become dependencies of the resulting bundle.
  // The kind of the dependency depends on output.libraryTarget.
  // If an dependency matches exactly a property of the object, the property value is used as dependency.
  // The property value may contain a dependency type prefixed and separated with a space.
  // If the property value is true the property name is used instead.
  // If the property value is false the externals test is aborted and the dependency is not external.
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "react-relay": "Relay"
  },
  // Add additional plugins to the compiler.
  plugins: [
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      title: 'Custom template',
      template: path.join(__dirname, '../../src/index.html')
    }),
  ],
  // Options affecting the normal modules (NormalModuleFactory).
  module: {
    // An array of automatically applied loaders.
    loaders: [
      {
        // A condition that must be met.
        test: /\.js$/,
        // A condition that must not be met.
        exclude: [
          /node_modules(?!\/redux\-immutable)/
        ],
        // A string of “!” separated loaders.
        loader: 'babel'
      }
    ]
  }
};

export default config;
