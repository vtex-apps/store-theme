import React, { Component } from 'react'
import { injectIntl, intlShape } from 'react-intl'

import VTEXIcon from '../images/VTEXIcon'
import CardIcon from '../images/CardIcon'

class Footer extends Component {
  static propTypes = {
    intl: intlShape.isRequired,
  }

  translate = id => this.props.intl.formatMessage({ id: `dreamstore.${id}` })

  render() {
    const year = new Date().getFullYear()
    return (
      <footer className="w-100 left-0 bg-serious-black">
        <div className="center white flex items-center justify-between w-100 items-center f6 ph9 pt9">
          <div>All rights reserved | {year}</div>
          <div className="cf tc fw7 flex items-center justify-center f5">
            {this.translate('poweredBy')}
            <VTEXIcon />
          </div>
        </div>
        <div className="ph9 pb9 flex justify-between items-end">
          <div className="white">
            <a className="db pv2 fw5">About us</a>
            <a className="db pv2 fw5">Privacy policy</a>
            <a className="db pv2 fw5">Terms and conditions</a>
          </div>
          <div className="mr4">
            <CardIcon />
          </div>
        </div>
      </footer>
    )
  }
}

export default injectIntl(Footer)
