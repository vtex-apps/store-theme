import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'
import Input from '@vtex/styleguide/lib/Input'
import Button from '@vtex/styleguide/lib/Button'
import SearchBar from 'vtex.storecomponents/SearchBar'

import { ExtensionPoint } from 'render'

import SearchIcon from '../images/SearchIcon'

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

  render() {
    const { account } = global.__RUNTIME__
    const { name } = this.props
    const { searchValue } = this.state
    return (
      <div className="fixed z-2 w-100 shadow-5">
        <div className="z-2 items-center w-100 top-0 bg-white tl">
          <ExtensionPoint id="menu-link" />
        </div>
        <div className="z-2 flex flex-wrap w-100 top-0 pa4 pa5-ns ph7-l bg-white tl">
          <div className="flex pa4">
            <a className="link b f3 near-black tc tl-ns serious-black" href="/">
              {name || account}
            </a>
          </div>
          <div className="flex-ns w-100 w-60-m w-75-l pr4-l">
            <div className="w-100">
              <SearchBar className="flex"
                placeholder={this.translate('search-placeholder')}
                emptyPlaceholder={this.translate('search-emptyPlaceholder')}
              />
            </div>
          </div>
          <div className="absolute top-3 right-1">
            <ExtensionPoint id="minicart" />
          </div>
        </div>
      </div>
    )
  }
}

export default injectIntl(Header)
