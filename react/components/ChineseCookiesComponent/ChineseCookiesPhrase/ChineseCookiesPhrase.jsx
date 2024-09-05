import React from 'react'

// Proptypes
import PropTypes from 'prop-types'
// CSS
import styles from '../../../../styles/css/chinese-cookies/chinese-cookies.css'

const ChineseCookiesPhrase = ({ phrase }) => {
  return <h3 className={styles.ChineseCookiesPhrase}>{phrase}</h3>
}

ChineseCookiesPhrase.propTypes = {
  phrase: PropTypes.string.isRequired,
}

export default ChineseCookiesPhrase
