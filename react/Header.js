import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import { Alert } from 'vtex.styleguide'

import { ExtensionPoint } from 'render'

import Modal from './components/Modal'
import TopMenu from './components/TopMenu'

export const TOAST_TIMEOUT = 3000

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAddToCart: false,
      hasError: false,
      error: null,
      showMenuPopup: false,
    }
  }

  static propTypes = {
    name: PropTypes.string,
    logoUrl: PropTypes.string,
    logoTitle: PropTypes.string,
    intl: intlShape.isRequired,
  }

  componentDidMount() {
    this._timeouts = []
    document.addEventListener('message:error', this.handleError)
    document.addEventListener('item:add', this.handleItemAdd)
    document.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    if (this._timeouts.length !== 0) {
      this._timeouts.map(el => {
        clearTimeout(el)
      })
    }

    document.removeEventListener('message:error', this.handleError)
    document.removeEventListener('item:add', this.handleItemAdd)
    document.removeEventListener('scroll', this.handleScroll)
  }

  handleError = e => {
    this.setState({ hasError: true, error: e })
    const timeOut = window.setTimeout(() => {
      this.setState({ hasError: false })
    }, TOAST_TIMEOUT)

    this._timeouts.push(timeOut)
  }

  handleItemAdd = () => {
    this.setState({ isAddToCart: !this.state.isAddToCart })
    const timeOut = window.setTimeout(() => {
      this._timeoutId = undefined
      this.setState({ isAddToCart: !this.state.isAddToCart })
    }, TOAST_TIMEOUT)

    this._timeouts.push(timeOut)
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

  render() {
    const { account } = global.__RUNTIME__
    const { name, logoUrl, logoTitle } = this.props
    const { isAddToCart, hasError, showMenuPopup, error } = this.state

    return (
      <div
        className="relative z-2 w-100 shadow-5"
        ref={e => {
          this._el = e
        }}
      >
        <div className="z-2 items-center w-100 top-0 bg-white tl">
          <ExtensionPoint id="menu-link" />
        </div>
        <TopMenu 
          logoUrl={logoUrl}
          logoTitle={logoTitle}
        />
        <ExtensionPoint id="category-menu" />
        {showMenuPopup && (
          <Modal>
            <TopMenu 
              logoUrl={logoUrl}
              logoTitle={logoTitle}
              fixed
            />
          </Modal>
        )}
        <div
          className="flex flex-column items-center fixed w-100"
          style={{ top: 120 }}
        >
          {isAddToCart && (
            <div className="pa2 mw9">
              <Alert type="success">
                <FormattedMessage id="dreamstore.buy-success" />
              </Alert>
            </div>
          )}

          {hasError && (
            <div className="pa2 mw9">
              <Alert type="error">{error.detail.message}</Alert>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default injectIntl(Header)
