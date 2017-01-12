import React, {Component} from 'react'

// eslint-disable-next-line
class Footer extends Component {
  render () {
    return (
      <footer className="f6 tc w-100 pv4 ph1 ph5-m ph6-l light-silver bg-white bt b--black-05">
        <p className="black-20">
          Dreamstore - VTEX
        </p>
        <a href="http://vtex.com" target="_blank" title="Tecnologia VTEX">
          <img
            alt="Tecnologia VTEX"
            src="//dreamstore.vteximg.com.br/arquivos/logo-vtex.png"
          />
        </a>
      </footer>
    )
  }
}

export default Footer
