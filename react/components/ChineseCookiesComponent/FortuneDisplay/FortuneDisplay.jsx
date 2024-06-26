import React from 'react'
import ChineseCookiesPhrase from '../ChineseCookiesPhrase/ChineseCookiesPhrase'
import ChineseCookiesNumber from '../ChineseCookiesNumber/ChineseCookiesNumber'
import PropTypes from 'prop-types'
// CSS
import styles from '../../../../styles/css/chinese-cookies/chinese-cookies.css'

const FortuneDisplay = ({ phrase, number }) => {
  return phrase && number ? (
    <div className={styles.CookieResultContainer} >
      <ChineseCookiesPhrase phrase={phrase.CookieFortune} />
      <ChineseCookiesNumber fortuneNumber={number} />
    </div>
  ) : (null)
}

FortuneDisplay.propTypes = {
  phrase: PropTypes.string,
  number: PropTypes.string,
}

export default FortuneDisplay
