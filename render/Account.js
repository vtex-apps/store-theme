import React, {Component} from 'react'
import MyOrders from './components/MyOrders.js'
import MyAccount from './components/MyAccount.js'

// Page Components
import Template from './components/Template'

//eslint-disable-next-line
export default class Account extends Component {
  checkLogin () {
    let cookies = []
    if (window && window.document) {
      cookies = document.cookie.match(/VtexIdclientAutCookie_[\w.-]*/g) || []
    }
    return cookies.length > 0
  }

  componentDidMount () {
    const logged = this.checkLogin()
    this.setState({logged})
    if (!logged && window && window.location) {
      window.location.href = '/login?ReturnUrl=/account'
    }
  }

  render () {
    const logged = this.state ? this.state.logged : null
    let errorComponent
    if (logged !== null && !logged) {
      errorComponent = <h3 className="font-display f2 fw4 normal pl2-ns tc tl-ns black-50">We are going to redirect you to login...</h3>
    }
    return (
      <Template>
        <article className="cf w-100 mw9-ns pb2 center">
          {
            errorComponent || (
              <div>
                <MyAccount />
                <MyOrders />
              </div>
            )
          }
        </article>
      </Template>
    )
  }
}
