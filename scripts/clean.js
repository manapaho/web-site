/**
 * Manapaho (https://github.com/manapaho/)
 *
 * Copyright © 2015 Manapaho. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import del from 'del';
import task from './lib/task';
import fs from './lib/fs';

/**
 * Cleans up the output (dist) directory.
 */
export default task('clean', async () => {
  await del(['dist/*', '!dist/.git'], {dot: true});
  await fs.makeDir('dist/externals');
});
