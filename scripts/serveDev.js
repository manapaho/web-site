/**
 * Manapaho (https://github.com/manapaho/)
 *
 * Copyright © 2015 Manapaho. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import browserSync from 'browser-sync';
import connectLogger from 'connect-logger';
import historyApiFallback from 'connect-history-api-fallback';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './config/webpack.dev';
import task from './lib/task';

/**
 * Serves the website in development mode.
 */
export default task('serve dev', async () => {
  // Force development mode for all build components.
  process.env['BABEL_ENV'] = 'development';

  // Instantiate the bundler with the development configuration.
  var bundler = webpack(webpackConfig);

  // Create and run the BrowserSync server.
  browserSync({
    // Configure the server.
    server: {
      // Serve all files starting from the dist directory.
      baseDir: './dist',
      // Set the default index file.
      index: 'index.html', // localhost:3000/ => serves index.html
      // Add additional middleware.
      middleware: [
        // Log requests to the console.
        connectLogger({format: '%date %status %method %time %url'}),
        // Enable HTML5 History routing.
        historyApiFallback(),
        // Add the webpack development server middleware.
        webpackDevMiddleware(bundler, {
          publicPath: webpackConfig.output.publicPath,
          noInfo: false,
          quiet: true,
          stats: {
            colors: true
          }
        }),
        // Add the webpack hot development middleware.
        webpackHotMiddleware(bundler)
      ]
    },
    // Set the development ports.
    ui: {
      // Web console port.
      port: 3001,
      // Weinre sync port.
      weinre: {
        port: 3002
      }
    },
    // TODO
    files: [
      './src/endpoint/static/*.css'
    ]
  });
});
