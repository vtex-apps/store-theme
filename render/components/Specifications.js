import {TextBlockLoading} from 'vtex.loading'
import React, {Component, PropTypes} from 'react'

// eslint-disable-next-line
class Specifications extends Component {
  render () {
    const properties = this.props.properties
    const loadingComponent = (
      <div>
        <TextBlockLoading size="large" />
      </div>
    )

    return (
      <div className="pa2 pa3-ns mt3">
        <h3 className="font-display f3 f2-ns fw3 ma0 mb2 lh-title black-50">
          Product Details
        </h3>
        {
          properties
            ? (
              <dl className="mt2 tl-ns f5 normal lh-copy black-50">
                {
                  properties.map((property) => {
                    const facet = property.facet
                    return (
                      <div key={facet.slug}>
                        <dt className="b primary o-70">{facet.name}</dt>
                        {
                          facet.values.map((value) => (
                            <dd className="ml0 mb2" key={value}>{value}</dd>
                          ))
                        }
                      </div>
                    )
                  })
                }
              </dl>
            )
            : loadingComponent
        }
      </div>
    )
  }
}

Specifications.propTypes = {
  properties: PropTypes.array,
}

export default Specifications
