import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
import Shelf from './Shelf'

// eslint-disable-next-line
export default class SearchPage extends Component {
  static propTypes = {
    params: PropTypes.object,
  }

  render() {
    const term = this.props.params.term
    return (
      <div>
        <Header />
        <Shelf query={term} />
        <Footer />
      </div>
    )
  }
}
