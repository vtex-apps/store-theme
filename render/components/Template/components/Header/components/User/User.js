import React, {Component, PropTypes} from 'react'
import Link from 'vtex.render/Link'
import Logout from './Logout'
import {withApollo} from 'react-apollo'
import gql from 'graphql-tag'
import classNames from 'classnames/bind'
import style from './user.css'
import makeCancelable from '../../../../../../utils/makeCancelable'

const cx = classNames.bind(style)

const query = gql`
  query Profile {
    profile {
      email
    }
  }
`

class User extends Component {
  constructor (props) {
    super(props)
    this.state = {logged: false, isOpen: false}
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  handleLogout = () => {
    this.setState({
      isOpen: false,
      logged: false,
    })
  }

  componentDidMount () {
    let cookies = []
    if (window && window.document) {
      cookies = document.cookie.match(/VtexIdclientAutCookie_[\w.-]*/g) || []
    }

    const logged = cookies.length > 0
    if (logged) {
      this.profileQuery = makeCancelable(this.props.client.query({ query: query }))

      this.profileQuery.promise
      .then(({data}) => {
        const {profile} = data
        this.setState({
          logged,
          email: profile && profile.email ? profile.email : null,
        })
      })
    } else {
      this.setState({
        logged,
      })
    }
  }

  componentWillUnmount () {
    if (this.profileQuery) {
      this.profileQuery.cancel()
    }
  }

  render () {
    const {logged, isOpen, email} = this.state
    const emailComponent = email ? (
      <span className="dn dib-l w4 ml1 nowrap truncate black-60">{email}</span>
    ) : null

    return (
      <div className="flex-auto flex-none-l tr pr1 pr0-ns">
        {
          logged ? (
            <div className="dib relative">
              <button onClick={this.handleClick} className="flex items-center bn pointer dim pv3 ph2 relative bg-transparent" title="Minha Conta">
                <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path className="fill-light-primary" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                {emailComponent}
              </button>
              <div className={`w5 absolute top-1 right-0 center br1 bg-white z-999 shadow-1 overflow-hidden ${isOpen ? cx('dropdown-open') : cx('dropdown-closed')}`}>
                <ul className="list ma0 pa0">
                  <li onClick={this.handleClick} className="hover-bg-near-white">
                    <Link className="flex items-center w-100 link tl bn pointer pa3 relative black-60 hover-light-primary" to="/account">
                      <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-light-primary" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                      <span className="ml2">Minha conta</span>
                    </Link>
                  </li>
                  <li onClick={this.handleLogout} className="hover-bg-near-white bt b--black-10">
                    <Logout />
                  </li>
                </ul>
              </div>
              {
                isOpen ? (
                  <div onClick={this.handleClick} className="fixed w-100 h-100 top-0 left-0 z-2"></div>
                ) : null
              }
            </div>
          ) : (
            <Link className="link" to="/account">
              <button className="bn pointer dim pv3 ph3 relative bg-transparent" title="Minha Conta">
                <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path className="fill-light-primary" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </button>
            </Link>
          )
        }
      </div>
    )
  }
}

User.propTypes = {
  client: PropTypes.object,
}

export default withApollo(User)
