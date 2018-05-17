import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import Alert from '@vtex/styleguide/lib/Alert'

import { ExtensionPoint } from 'render'

import Modal from './Modal'
import TopMenu from './TopMenu'

export const TOAST_TIMEOUT = 3000

class Header extends Component {
  state = {
    isAddToCart: false,
    showMenuPopup: false,
  }

  static propTypes = {
    name: PropTypes.string,
    intl: intlShape.isRequired,
  }

  handleScroll = () => {
    if (!this._el) {
      return
    }

    const scroll = window.scrollY

    const { scrollHeight } = this._el

    if (scroll < scrollHeight && this.state.showMenuPopup) {
      this.setState({
        showMenuPopup: false,
      })
    } else if (scroll >= scrollHeight) {
      this.setState({
        showMenuPopup: true,
      })
    }
  }

  handleItemAdd = () => {
    this.setState({ isAddToCart: !this.state.isAddToCart })
    this._timeoutId = window.setTimeout(() => {
      this._timeoutId = undefined
      this.setState({ isAddToCart: !this.state.isAddToCart })
    }, TOAST_TIMEOUT)
  }

  componentWillUnmount() {
    if (typeof this._timeoutId !== 'undefined') {
      clearTimeout(this._timeoutId)
    }

    document.removeEventListener('item:add', this.handleItemAdd)
    document.removeEventListener('scroll', this.handleScroll)
  }

  componentDidMount() {
    document.addEventListener('item:add', this.handleItemAdd)
    document.addEventListener('scroll', this.handleScroll)
  }

  render() {
    const { account } = global.__RUNTIME__
    const { name } = this.props
    const { isAddToCart, showMenuPopup } = this.state
    return (
      <div className="relative z-2 w-100 shadow-5" ref={e => { this._el = e }}>
        <div className="z-2 items-center w-100 top-0 bg-white tl">
          <ExtensionPoint id="menu-link" />
        </div>
        <TopMenu name={name || account} />
        <ExtensionPoint id="category-menu" />
        {showMenuPopup && (
          <Modal>
            <TopMenu name={name || account} fixed />
          </Modal>
        )}
        {isAddToCart && (
          <div className="pa2 absolute flex justify-center w-100">
            <Alert type="success" autoClose={TOAST_TIMEOUT}>
              <FormattedMessage id="dreamstore.buy-success" />
            </Alert>
          </div>
        )}
      </div>
    )
  }
}

export default injectIntl(Header)
