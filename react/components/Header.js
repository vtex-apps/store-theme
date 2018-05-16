import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import Alert from '@vtex/styleguide/lib/Alert'

import { ExtensionPoint } from 'render'

import Modal from './Modal'
import TopMenu from './TopMenu'

export const TOAST_TIMEOUT = 3000
export const POPUP_LIMIT_SCROLL = 185

class Header extends Component {
  state = {
    isAddToCart: false,
    showMenuPopup: false,
  }

  static propTypes = {
    name: PropTypes.string,
    intl: intlShape.isRequired,
  }

  handleScroll = ({ pageY }) => {
    if (pageY < POPUP_LIMIT_SCROLL && this.state.showMenuPopup) {
      this.setState({
        showMenuPopup: false,
      })
    } else if (pageY >= POPUP_LIMIT_SCROLL) {
      this.setState({
        showMenuPopup: true,
      })
    }
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll)
  }

  componentDidMount() {
    document.addEventListener('item:add', () => {
      this.setState({ isAddToCart: !this.state.isAddToCart })
      window.setTimeout(() => {
        this.setState({ isAddToCart: !this.state.isAddToCart })
      }, TOAST_TIMEOUT)
    })

    document.addEventListener('scroll', this.handleScroll)
  }

  render() {
    const { account } = global.__RUNTIME__
    const { name } = this.props
    const { isAddToCart, showMenuPopup } = this.state
    return (
      <div className="relative z-2 w-100 shadow-5">
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
