import gtm from './scripts/gtm'
import Helmet from 'react-helmet'
import {connect} from 'react-redux'
import React, {Component, PropTypes} from 'react'

let gtmRendered = false
const defaultDescription = 'Dreamstore - Concept store for Render'

// eslint-disable-next-line
class Meta extends Component {
  render () {
    const {customTags, currency, language, workspace, version, title, description} = this.props
    const customTitle = title || 'Dreamstore - Concept store for Render'
    const customDescription = description || defaultDescription
    const defaultTags = [
      {'name': 'currency', 'content': currency},
      {'name': 'language', 'content': language},
      {'name': 'description', 'content': description},
      { 'name': 'google-site-verification', 'content': ''},
      {'property': 'fb:app_id', 'content': ''},
      {'property': 'og:title', 'content': customTitle},
      {'property': 'og:description', 'content': customDescription},
    ]
    const scripts = gtmRendered ? [] : [{
      'type': 'application/javascript',
      'innerHTML': `dataLayer = [{'workspace': '${workspace}', 'render': '${version}'}]`,
    }, {
      'type': 'application/javascript',
      'innerHTML': gtm,
    }]
    gtmRendered = true

    return (
      <Helmet
        meta={defaultTags.concat(customTags || [])}
        script={scripts}
        title={customTitle}
      />
    )
  }
}

Meta.propTypes = {
  customTags: PropTypes.arrayOf(PropTypes.object),
  currency: PropTypes.string,
  description: PropTypes.string,
  language: PropTypes.string,
  title: PropTypes.string,
  version: PropTypes.string,
  workspace: PropTypes.string,
}

const mapStateToProps = (state) => {
  const {currency, language} = state.context.culture
  const {workspace, version} = state.context
  return {currency, language, workspace, version}
}

const MetaConnected = connect(mapStateToProps)(Meta)

export default MetaConnected
