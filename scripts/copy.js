/**
 * Manapaho (https://github.com/manapaho/)
 *
 * Copyright © 2015 Manapaho. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import task from './lib/task';
import copy from './lib/copy';

/**
 * Copies static files such as robots.txt, favicon.ico to the
 * output (dist) folder.
 */
export default task('copy', async () => {

  await Promise.all([
    copy('./externals', './dist/externals')
  ]);

/*
  if (global.WATCH) {
    const watcher = await watch('../externals/!**!/!*.*');
    watcher.on('changed', async (file) => {
      // const relPath = file.substr(path.join(__dirname, '../src/content/').length);
      // await copy(`src/content/${relPath}`, `build/content/${relPath}`);
    });
  }
*/
});
