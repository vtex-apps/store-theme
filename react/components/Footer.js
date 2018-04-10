import React, { Component } from 'react'
import { injectIntl, intlShape } from 'react-intl'

class Footer extends Component {
  static propTypes = {
    intl: intlShape.isRequired,
  }

  translate = id => this.props.intl.formatMessage({ id: `dreamstore.${id}` })

  render() {
    const year = new Date().getFullYear()
    return (
      <footer className="w-100 bottom-0 pa7 pa9-l bg-near-white flex items-center">
        <div className="mw8 center">
          <div className="cf tc fw7 flex items-center justify-center">
            {this.translate('poweredBy')}
          </div>
          <div className="tc">{year}</div>
        </div>
      </footer>
    )
  }
}

export default injectIntl(Footer)
