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

  handleSearch = () => {
    const { searchValue } = this.state
    location.href = `/${searchValue}`
  }

  render() {
    const { name } = this.props
    const { searchValue } = this.state
    return (
      <div className="flex-ns justify-between items-center w-100 top-0 pa2 pa5-l bg-light-gray">
        <a className="link b f3 near-black mt3" href="/">
          {name || account}
        </a>
        <div className="tr-ns">
          <Input
            long
            placeholder={this.translate('search-placeholder')}
            value={searchValue}
            onChange={this.handleChange}
          />{' '}
          <Button onClick={this.handleSearch}>
            {this.translate('search')}
          </Button>
        </div>
      </div>
    )
  }
}

export default injectIntl(Header)
