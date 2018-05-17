import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import Alert from '@vtex/styleguide/lib/Alert'
import SearchBar from 'vtex.storecomponents/SearchBar'

import { ExtensionPoint } from 'render'

const TOAST_TIMEOUT = 3000

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAddToCart: false,
    }
  }

  static propTypes = {
    name: PropTypes.string,
    intl: intlShape.isRequired,
  }

  translate = id => this.props.intl.formatMessage({ id: `dreamstore.${id}` })

  componentDidMount() {
    document.addEventListener('item:add', () => {
      this.setState({ isAddToCart: true })
      window.setTimeout(() => {
        this.setState({ isAddToCart: false })
      }, TOAST_TIMEOUT)
    })
  }

  render() {
    const { account } = global.__RUNTIME__
    const { name } = this.props
    const { isAddToCart } = this.state
    return (
      <div className="relative fixed z-2 w-100 shadow-5">
        <div className="z-2 items-center w-100 top-0 bg-white tl">
          <ExtensionPoint id="menu-link" />
        </div>
        <div className="z-2 flex flex-wrap w-100 top-0 pa4 pa5-ns ph7-l bg-white tl">
          <div className="flex pa4">
            <a className="link b f3 near-black tc tl-ns serious-black" href="/">
              {name || account}
            </a>
          </div>
          <div className="flex items-center flex-auto">
            <div className="w-100 flex pr8-ns">
              <div className="w-100">
                <SearchBar
                  placeholder={this.translate('search-placeholder')}
                  emptyPlaceholder={this.translate('search-emptyPlaceholder')}
                />
              </div>
            </div>
          </div>
          <div className="absolute top-3 right-1 pv4">
            <ExtensionPoint id="minicart" />
          </div>
        </div>
        <ExtensionPoint id="category-menu" />
        {isAddToCart && (
          <div className="pa2 absolute flex justify-center w-100">
            <Alert type="success">
              <FormattedMessage id="dreamstore.buy-success" />
            </Alert>
          </div>
        )}
      </div>
    )
  }
}

export default injectIntl(Header)
