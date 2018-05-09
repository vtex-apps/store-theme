import React, { Component } from 'react'
import { injectIntl, intlShape } from 'react-intl'

import VTEXIcon from '../images/VTEXIcon'

class Footer extends Component {
  static propTypes = {
    intl: intlShape.isRequired,
  }

  translate = id => this.props.intl.formatMessage({ id: `dreamstore.${id}` })

  render() {
    const year = new Date().getFullYear()
    return (
      <footer className="w-100 left-0 bg-serious-black tc tl-ns mt8">
        <div className="center white flex-ns items-center justify-between w-100 items-center f6 ph9-ns ph7 pt9-ns pt7 pb5 pb0-ns">
          <div>All rights reserved | {year}</div>
          <div className="fw7 flex items-center justify-center f5">
            {this.translate('poweredBy')}
            <VTEXIcon />
          </div>
        </div>
        <div className="ph9 pb7 pb9-ns flex-ns justify-between items-end">
          <div className="white">
            <a className="db pv3 pv2-ns fw5">About us</a>
            <a className="db pv3 pv2-ns fw5">Privacy policy</a>
            <a className="db pv3 pv2-ns fw5">Terms and conditions</a>
          </div>
        </div>
      </footer>
    )
  }
}

export default injectIntl(Footer)
