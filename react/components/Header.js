import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'
import Input from '@vtex/styleguide/lib/Input'
import Button from '@vtex/styleguide/lib/Button'

import MiniCart from './MiniCart'
import CartIcon from '../images/CartIcon'
import SearchIcon from '../images/SearchIcon'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
      showCart: false,
    }
  }

  static propTypes = {
    name: PropTypes.string,
    intl: intlShape.isRequired,
  }

  translate = id => this.props.intl.formatMessage({ id: `dreamstore.${id}` })

  handleChange = ({ target: { value } }) => {
    this.setState({ searchValue: value })
  }

  handleSearch = () => location.assign(`/${this.state.searchValue}/s`)

  handleCart = () => location.assign('/checkout/#/cart')

  handleCartMouseEnter = () => {
    this.setState({ showCart: true })
  }

  handleMouseLeave = () => {
    this.setState({ showCart: false })
  }

  render() {
    const { account } = global.__RUNTIME__
    const { name } = this.props
    const { searchValue, showCart } = this.state
    return (
      <div className="z-2 flex-ns items-center w-100 top-0 pa4 pa5-ns bg-white tc tl-ns">
        <a className="link b f3 near-black tc tl-ns pr5" href="/">
          {name || account}
        </a>
        <div className="tr-ns flex items-center flex-auto justify-center">
          <div className="w-100 mw7-ns mr4">
            <Input
              placeholder={this.translate('search-placeholder')}
              value={searchValue}
              onChange={this.handleChange}
              size="large"
            />
          </div>
          <div className="flex items-center justify-center">
            <Button
              icon
              primary
              data-test-id="search"
              onClick={this.handleSearch}
              size="large"
            >
              <SearchIcon />
            </Button>
          </div>
        </div>
        <div className="pl6">
          <Button
            data-test-id="cart"
            onClick={this.handleCart}
            onMouseEnter={this.handleCartMouseEnter}
          >
            <CartIcon />
          </Button>
          {showCart && (
            <div
              className="absolute z-4 right-0 top-2 w-30 ma6 mt10 bg-white br2 shadow-2"
              onMouseLeave={this.handleMouseLeave}
            >
              <MiniCart />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default injectIntl(Header)
