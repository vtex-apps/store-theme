import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'
import Input from '@vtex/styleguide/lib/Input'
import Button from '@vtex/styleguide/lib/Button'

class Header extends Component {
  translate = id => this.props.intl.formatMessage({ id: `dreamstore.${id}` })

  render() {
    const { name } = this.props
    return (
      <div className="w-100 top-0 pa4 pa5-l bg-light-gray flex justify-between items-center">
        {name && <div className="b f3 near-black mt3">{name}</div>}
        <div className="mb0">
          <Input long placeholder={this.translate('search-placeholder')} />{' '}
          <Button>{this.translate('search')}</Button>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  name: PropTypes.string,
  intl: intlShape.isRequired,
}
export default injectIntl(Header)
