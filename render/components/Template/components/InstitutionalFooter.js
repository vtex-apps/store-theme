import Link from 'vtex.render/Link'
import React, {Component} from 'react'

// eslint-disable-next-line
class InstitutionalFooter extends Component {
  render () {
    return (
      <div className="f6 tc tl-l w-100 pv3 ph2 bg-white">
        <div className="flex flex-wrap justify-center mw8-m mw9-l center">
          <div className="w-100 w-auto-l flex-auto-l pv4 ph3">
            <h4 className="font-display f3 f2-ns fw3 tracked light-primary ma0 mb2">
              Get to know us
            </h4>
            <nav>
              <ul className="list ma0 pa0 lh-copy">
                <li>
                  <Link
                    className="link dim black-40 f4 dib"
                    to="/about"
                  >
                    About us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}

export default InstitutionalFooter
