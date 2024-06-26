import React from 'react'

// Proptypes
import PropTypes from 'prop-types'
// CSS
import styles from '../../../../styles/css/chinese-cookies/chinese-cookies.css'

const ChineseCookiesNumber = ({ fortuneNumber }) => {
  return <h5 className={styles.ChineseCookiesNumber} >{fortuneNumber}</h5>
}

ChineseCookiesNumber.propTypes = {
  fortuneNumber: PropTypes.string.isRequired,
}

export default ChineseCookiesNumber
