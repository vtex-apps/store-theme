import React from 'react'
import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'
import { Logo, SearchBar } from 'vtex.store-components'
import { ExtensionPoint } from 'render'

const TopMenu = ({ logoUrl, logoTitle, intl, fixed }) => {
  const translate = id => intl.formatMessage({ id: `dreamstore.${id}` })

  return (
    <div
      className={`${
        fixed ? 'fixed top-0 shadow-5' : 'top-0'
      } z-999 flex items-center flex-wrap w-100 pa4 pa5-ns ph8-l bg-white tl`}
    >
      <div className="flex pa4">
        <a className="link b f3 near-black tc tl-ns serious-black flex" href="/">
          <Logo
            url={logoUrl}
            title={logoTitle}
          />
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
      <div className="flex items-center flex-auto absolute top-3 right-1">
        <ExtensionPoint id="login" />
        <ExtensionPoint id="minicart" />
      </div>
    </div>
  )
}

TopMenu.propTypes = {
  logoUrl: PropTypes.string,
  logoTitle: PropTypes.string,
  intl: intlShape.isRequired,
  fixed: PropTypes.bool,
}

TopMenu.defaultProps = {
  fixed: false,
}

export default injectIntl(TopMenu)
