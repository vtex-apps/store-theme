import React, {Component, PropTypes} from 'react'

class SearchSuggestionList extends Component {
  constructor (props) {
    super(props)
    this.generateListItem = this.generateListItem.bind(this)
    this.handleLinkClick = this.handleLinkClick.bind(this)
  }

  handleLinkClick (e) {
    if (window && window.browserHistory) {
      const path = e.target.attributes['data-href'].value
      window.browserHistory.push(path)
    }
    this.props.onClearSearch(true)
  }

  generateListItem (item, key) {
    const {name, href, criteria} = item
    if (criteria) {
      return null
    }
    const parsedHref = href.replace('http://portal.vtexcommercestable.com.br', '')
    return (
      <li data-href={parsedHref} className="pointer bb b--black-05 hover-bg-light-gray pv3 ph2 silver" key={key} onClick={this.handleLinkClick}>
        {name}
      </li>
    )
  }

  render () {
    const {suggestions, error, input} = this.props
    const suggestionsList = suggestions.map((suggestion, index) => this.generateListItem(suggestion, index))
    const noSuggestionFound = input.length > 0 ? (
      <span className="silver f3 pv3 ph2 ttu">
        {`Not found any suggestions for "${input}".`}
      </span>
    ) : null
    const errorMessage = error ? (
      <span className="silver f3 pv3 ph2 ttu">
        An error has occurred, try again.
      </span>
    ) : null

    return (
      <div className="flex-auto ph2 pv1 center w-90 mw7-ns overflow-x-auto">
        {
          errorMessage ||
          (
            suggestionsList.length > 0 && !(suggestionsList.length === 1 && suggestionsList[0] === null)
            ? (
              <ul className="list ma0 pa0 f3">
                {suggestionsList}
              </ul>
            ) : noSuggestionFound
          )
        }
      </div>
    )
  }
}

SearchSuggestionList.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.bool,
  input: PropTypes.string,
  onClearSearch: PropTypes.func,
}

export default SearchSuggestionList
