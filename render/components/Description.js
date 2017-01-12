import classnames from 'classnames'
import {TextBlockLoading} from 'vtex.loading'
import React, {Component, PropTypes} from 'react'

// eslint-disable-next-line
class Description extends Component {
  constructor (props) {
    super(props)
    this.state = {showFullDescription: false}
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillReceiveProps ({text}) {
    if (text !== this.props.text) {
      this.setState({showFullDescription: false})
    }
  }

  handleClick () {
    this.setState({showFullDescription: true})
  }

  render () {
    const description = this.props.text
    const {showFullDescription} = this.state
    const descriptionClasses = classnames('overflow-hidden f5 normal lh-copy black-50', {
      'h5': !showFullDescription,
    })
    const buttonClasses = classnames('absolute bottom-0 left-0 w-100 bn tc pv2 pointer bg-white-90 primary hover-light-primary z-2', {
      'dn': showFullDescription,
      'db': !showFullDescription,
    })

    return (
      <div className="pa2 pa3-ns relative bb b--black-05">
        <h3 className="font-display f3 f2-ns fw3 ma0 mb2 lh-title black-50">
          Description
        </h3>
        {
          description
            ? (
              <div>
                <div
                  className={descriptionClasses}
                  // eslint-disable-next-line
                  dangerouslySetInnerHTML={{__html: description}}
                />
                <button
                  className={buttonClasses}
                  onClick={this.handleClick}
                  type="button"
                >
                  Show more
                </button>
              </div>
            )
            : <TextBlockLoading size="large" />
        }
      </div>
    )
  }
}

Description.propTypes = {
  text: PropTypes.string,
}

export default Description
