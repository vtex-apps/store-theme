import React from 'react'
import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'
import SearchBar from 'vtex.storecomponents/SearchBar'

import { ExtensionPoint } from 'render'

const TopMenu = ({ name, intl, fixed }) => {
  const translate = id => intl.formatMessage({ id: `dreamstore.${id}` })

  return (
    <div
      className={`${
        fixed ? 'fixed mt4 top-2 shadow-5' : 'top-0'
      } z-999 flex flex-wrap w-100 pa4 pa5-ns ph7-l bg-white tl`}
    >
      <div className="flex pa4">
        <a className="link b f3 near-black tc tl-ns serious-black" href="/">
          {name}
        </a>
      </div>
      <div className="flex items-center flex-auto">
        <div className="w-100 flex pr8-ns ma5">
          <div className="w-100">
            <SearchBar
              placeholder={translate('search-placeholder')}
              emptyPlaceholder={translate('search-emptyPlaceholder')}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center flex-auto absolute top-3 right-1 pv4">
        <ExtensionPoint id="login" />
        <ExtensionPoint id="minicart" />
      </div>
    </div>
  )
}

TopMenu.propTypes = {
  name: PropTypes.string.isRequired,
  intl: intlShape.isRequired,
  fixed: PropTypes.bool,
}

TopMenu.defaultProps = {
  fixed: false,
}

export default injectIntl(TopMenu)
