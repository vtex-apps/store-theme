import React from 'react'
import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'
import SearchBar from 'vtex.storecomponents/SearchBar'
import Logo from 'vtex.store-components/Logo'

import { ExtensionPoint } from 'render'

const TopMenu = ({ logoUrl, logoTitle, intl, fixed }) => {
  const translate = id => intl.formatMessage({ id: `dreamstore.${id}` })

  return (
    <div className={`${fixed ? 'fixed mt4 top-2 shadow-5' : 'top-0'} z-999 flex flex-wrap justify-center w-100 pa4 pa5-ns ph7-l bg-white tl`}>
      <div className="flex pa4">
        <a className="link b f3 near-black tc tl-ns serious-black flex" href="/">
          <Logo 
            url={logoUrl}
            title={logoTitle}
          />
        </a>
      </div>
      <div className="vtex-searchbar__container flex items-center flex-auto">
        <div className="w-100 flex pr8-ns">
          <div className="w-100">
            <SearchBar
              placeholder={translate('search-placeholder')}
              emptyPlaceholder={translate('search-emptyPlaceholder')}
            />
          </div>
        </div>
      </div>
      <div className="absolute top-3 right-1 pv4">
        <ExtensionPoint id="minicart" />
      </div>
    </div>
  )
}

TopMenu.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  logoTitle: PropTypes.string.isRequired,
  intl: intlShape.isRequired,
  fixed: PropTypes.bool,
}

TopMenu.defaultProps = {
  fixed: false,
}

export default injectIntl(TopMenu)
