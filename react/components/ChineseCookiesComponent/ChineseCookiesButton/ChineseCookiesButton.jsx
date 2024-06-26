import React from 'react'

// Proptypes
import PropTypes from 'prop-types'
// CSS
import styles from '../../../../styles/css/chinese-cookies/chinese-cookies.css'

const ChineseCookiesButton = ({ fortuneHandler }) => {
  return <button onClick={fortuneHandler} className={styles.ChineseCookiesButton} >Fortuna</button>
}

ChineseCookiesButton.propTypes = {
  fortuneHandler: PropTypes.func.isRequired,
}

export default ChineseCookiesButton
