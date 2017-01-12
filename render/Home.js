import Link from 'vtex.render/Link'
import React, {Component} from 'react'
import {sendEvent} from 'vtex.navigation-capture'

// Page Components
import Shelf from 'vtex.shelf'
import Template from './components/Template'

// eslint-disable-next-line
class Home extends Component {
  componentDidMount () {
    sendEvent('homeView')
    window.render.prefetchRoute('product')
  }

  render () {
    return (
      <Template>
        <div className="flex mw8-m mw9-l center">
          <div className="w-100 w-80-l pb3 center">
            <Shelf
              category="moda"
              productQty="10"
              header={(
                <h2 className="font-display f2 fw4 ma0 pl2 pt2 mb2 tc tl-ns lh-title light-secondary bt b--black-05 bn-ns">
                  <Link
                    className="dib-ns items-center link pb0 light-primary dim"
                    to="/moda/c"
                    >
                    <span>Moda</span>
                    <svg className="v-mid" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
                      <path className="fill-washed-primary" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    </svg>
                  </Link>
                </h2>
              )}
              />
            <Shelf
              category="eletrodomesticos"
              productQty="10"
              header={(
                <h2 className="font-display f2 fw4 ma0 pl2 pt2 mb2 tc tl-ns lh-title light-secondary bt b--black-05 bn-ns">
                  <Link
                    className="dib-ns items-center link pb0 light-primary dim"
                    to="/eletrodomesticos/c"
                    >
                    <span>Eletrodomésticos</span>
                    <svg className="v-mid" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
                      <path className="fill-washed-primary" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    </svg>
                  </Link>
                </h2>
              )}
              />
            <Shelf
              category="perfumaria"
              productQty="10"
              header={(
                <h2 className="pt0-ns font-display f2 fw4 ma0 pl2 pt2 mb2 tc tl-ns lh-title light-secondary bt b--black-05 bn-ns">
                  <Link
                    className="dib-ns items-center link pb0 light-primary dim"
                    to="/perfumaria/c"
                    >
                    <span>Perfumaria</span>
                    <svg className="v-mid" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
                      <path className="fill-washed-primary" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    </svg>
                  </Link>
                </h2>
              )}
              />
          </div>
        </div>
      </Template>
    )
  }
}

export default Home
