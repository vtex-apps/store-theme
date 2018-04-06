import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'
import Input from '@vtex/styleguide/lib/Input'
import Button from '@vtex/styleguide/lib/Button'

const { account } = global.__RUNTIME__

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
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

  render() {
    const { name } = this.props
    const { searchValue } = this.state
    return (
      <div className="z-2 flex-ns justify-between items-center w-100 top-0 pa2 pa5-l bg-light-gray">
        <a className="link b f3 near-black mt3" href="/">
          {name || account}
        </a>
        <div className="tr-ns flex">
          <Input
            long
            placeholder={this.translate('search-placeholder')}
            value={searchValue}
            onChange={this.handleChange}
          />{' '}
          <div className="mt3">
            <Button onClick={this.handleSearch}>
              {this.translate('search')}
            </Button>
            <Button primary onClick={this.handleCart}>
              {this.translate('cart')}
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default injectIntl(Header)
