import React, {Component, PropTypes} from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import InstitutionalFooter from './components/InstitutionalFooter'

// eslint-disable-next-line
class Template extends Component {
  render () {
    return (
      <main className="sans-serif bg-near-white">
        <Header
          title={this.props.title}
          customTags={this.props.customTags}
          searchTerm={this.props.searchTerm}
          description={this.props.description}
        />
        {this.props.children}
        <InstitutionalFooter />
        <Footer />
      </main>
    )
  }
}

Template.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  customTags: PropTypes.array,
  searchTerm: PropTypes.string,
  description: PropTypes.string,
}

export default Template
