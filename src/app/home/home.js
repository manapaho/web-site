/**
 * Manapaho (https://github.com/manapaho/)
 *
 * Copyright © 2015 Manapaho. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Relay from 'react-relay';

/**
 * The Home component.
 */
class Home extends React.Component {
  // Expected properties.
  static propTypes = {
    viewer: React.PropTypes.object.isRequired
  };
  // Initialize the component.
  constructor(props) {
    super(props);
  }
  // Render the component.
  render() {
    // Return the component UI.
    return (
      <div>
        <h1>Widget list</h1>
        <ul>
          {this.props.viewer.widgets.edges.map(edge =>
              <li>{edge.node.name} (ID: {edge.node.id})</li>
          )}
        </ul>
      </div>
    );
  }
}

/**
 * The home data container.
 */
export default Relay.createContainer(Home, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        widgets(first: 5) {
          edges {
            node {
              id,
              name,
            },
          },
        },
      }
    `
  }
});
