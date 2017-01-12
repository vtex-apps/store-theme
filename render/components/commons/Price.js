import {connect} from 'react-redux'
import {FormattedNumber} from 'react-intl'
import React, {Component, PropTypes} from 'react'

// eslint-disable-next-line
class Price extends Component {
  static propTypes = {
    value: React.PropTypes.number.isRequired,
  }

  render () {
    return (
      <FormattedNumber
        currency={this.props.currency}
        style="currency"
        value={this.props.value}
      />
    )
  }
}

Price.propTypes = {
  currency: PropTypes.string,
}

const mapStateToProps = (state) => {
  const {culture} = state.context
  const {currency} = culture
  return {currency}
}

const PriceWithDataConnected = connect(mapStateToProps)(Price)

export default PriceWithDataConnected
