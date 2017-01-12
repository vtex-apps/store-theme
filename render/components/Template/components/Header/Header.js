import Link from 'vtex.render/Link'
import React, {Component, PropTypes} from 'react'

import Meta from './components/Meta'
import User from './components/User'
import Menu from 'vtex.nav-menu'
import Minicart from './components/Minicart'
import SearchBar from './components/SearchBar'

// eslint-disable-next-line
class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {isNavMenuOpen: false}
  }

  handleClick = () => {
    this.setState({isNavMenuOpen: !this.state.isNavMenuOpen})
  }

  render () {
    return (
      <header className="relative w-100 shadow-1 bg-white">
        <Meta customTags={this.props.customTags} title={this.props.title} />
        <div className="mw9-ns center flex flex-wrap justify-start items-center ph2-ns pv2-ns">
          <div className="content-start dn-ns">
            <button className="bn pointer dim pv3 pr3 pl2 relative bg-transparent" onClick={this.handleClick}>
              <svg className="v-mid" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-light-primary" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            </button>
          </div>
          <div className="pl1-ns">
            <Link className="db w4 w-70-m w-100-l link dim light-primary" to="/">
              <span className="dn f4 f3-ns brand-name">Dreamstore</span>
              <img src="//dreamstore.vteximg.com.br/arquivos/logo-vtex.png" />
            </Link>
          </div>
          <div className="flex-auto w-100 w-auto-l order-last order-0-l ph2 pb2 ph0-ns pb1-m pv2-l">
            <SearchBar
              searchTerm={this.props.searchTerm}
              placeholder="Buscar"
            />
          </div>
          <User />
          <Minicart />
        </div>
        <Menu
          items={[
            {label: 'Moda', href: '/moda/c'},
            {label: 'Eletrodomésticos', href: '/eletrodomesticos/c'},
            {label: 'Perfumaria', href: '/perfumaria/c'},
          ]}
          isMobileMenuOpen={this.state.isNavMenuOpen}
          onToggleMenu={this.handleClick}
        />
      </header>
    )
  }
}

Header.propTypes = {
  customTags: PropTypes.arrayOf(PropTypes.object),
  searchTerm: PropTypes.string,
  title: PropTypes.string,
}

export default Header
