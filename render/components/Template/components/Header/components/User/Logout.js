import React, {Component} from 'react'
import Link from 'vtex.render/Link'

export default class Logout extends Component {
  handleClick = () => {
    const cookies = document.cookie.match(/VtexIdclientAutCookie_[\w.\-]*/g)
    cookies.forEach((cookieName) => {
      document.cookie = `${cookieName}=; Path=/; Domain=.${location.host}; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`
    })
  }

  render () {
    return (
      <Link to="/">
        <button onClick={this.handleClick} className="flex items-center w-100 tl bn pointer pa3 relative bg-transparent black-60 hover-light-primary" title="Sair">
          <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-light-primary" d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
          </svg>
          <span className="ml2">Sair</span>
        </button>
      </Link>
    )
  }
}
