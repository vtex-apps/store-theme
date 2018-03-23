import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'

import { ExtensionPoint } from 'render'

// eslint-disable-next-line
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <ExtensionPoint id="shelf" />
        <FormattedMessage id="dreamstore.soon" />
      </div>
    )
  }
}
