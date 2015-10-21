/**
 * Manapaho (https://github.com/manapaho/)
 *
 * Copyright © 2015 Manapaho. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import task from './lib/task';

/**
 * Builds and serves the development environment.
 */
export default task('development', async () => {
  // Run the following tasks.
  await require('./clean')();
  await require('./copy')();
  await require('./serveData')();
  await require('./serveDev')();
});
