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
 * Bundles JavaScript, CSS and images into one or more packages
 * ready to be used in a browser.
 */
export default task('production', async () => {

  await require('./clean')();
  await require('./copy')();
  await require('./bundle')();

});
