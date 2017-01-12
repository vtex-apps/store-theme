import React, {Component} from 'react'

// Page Components
import Template from './components/Template'

// eslint-disable-next-line
class About extends Component {
  render () {
    const title = 'About us - Dreamstore'

    return (
      <Template title={title}>
        <article className="mw7-l center ph2-ns pt3 pb4">
          <h2 className="font-display tc f2 f1-ns fw4 pa2 ma0 primary">About us</h2>
          <div className="lh-copy f5 f4-ns black-70 ph2">
            <p className="f4 f3-ns b">We're a model store build on Render</p>
          </div>
        </article>
      </Template>
    )
  }
}

export default About
