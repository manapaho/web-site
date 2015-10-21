/**
 * Manapaho (https://github.com/manapaho/)
 *
 * Copyright © 2015 Manapaho. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import process from 'process';
import webpack from 'webpack';
import task from './lib/task';
import config from './config/webpack.prod';

/**
 * Bundles JavaScript, CSS and images into one or more packages
 * ready to be used in a browser.
 */
export default task('production', async () => new Promise((resolve, reject) => {

  process.env['BABEL_ENV'] = 'production';

  const bundler = webpack(config);

  function bundle(err, stats) {
    if (err) {
      return reject(err);
    }
    return resolve();
  }

  bundler.run(bundle);
}));
