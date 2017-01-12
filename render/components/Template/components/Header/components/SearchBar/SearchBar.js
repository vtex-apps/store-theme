import React, {Component, PropTypes} from 'react'
import gql from 'graphql-tag'
import {withApollo} from 'react-apollo'
import makeCancelable from '../../../../../../utils/makeCancelable'

import SearchInput from './SearchInput'
import SearchPanel from './SearchPanel'

const query = gql`
query Suggestions($searchTerm: String){
  autocomplete(maxRows: 12, searchTerm: $searchTerm) {
    itemsReturned {
      name
      href
      criteria
    }
  }
}
`

// eslint-disable-next-line
class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {focus: false, suggestions: [], error: false}
    this.handleRef = this.handleRef.bind(this)
    this.handleClearSearch = this.handleClearSearch.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.getSuggestions = this.getSuggestions.bind(this)
  }

  handleRef (input) {
    this.input = input
  }

  handleClearSearch (clearValue) {
    if (clearValue) {
      this.input.value = ''
    }
    this.setState({
      focus: false,
      suggestions: [],
    })
  }

  handleClick () {
    const searchTerm = this.input.value
    if (!searchTerm) {
      return
    }
    window.browserHistory.push(`/${searchTerm}`)
    this.handleClearSearch(false)
    this.input.blur()
  }

  handleKeyDown (e) {
    if (e.key === 'Enter') {
      this.handleClick()
    }
    if (e.key === 'Escape') {
      this.handleClearSearch(false)
      this.input.blur()
    }
  }

  handleFocus () {
    if (this.input.value.length) {
      this.getSuggestions(this.input.value)
    }
    this.setState({focus: true})
  }

  handleClose () {
    this.setState({focus: false})
  }

  handleChange () {
    const searchTerm = this.input.value
    if (this.timeout) {
      clearTimeout(this.timeout)
      this.timeout = null
    }
    this.timeout = setTimeout(() => this.getSuggestions(searchTerm), 300)
  }

  getSuggestions (searchTerm) {
    this.timeout = null
    if (!searchTerm) {
      return this.setState({suggestions: [], error: false})
    }

    this.suggestionQuery = makeCancelable(
      this.props.client.query({
        query: query,
        variables: {searchTerm},
      })
    )

    this.suggestionQuery.promise
    .then(({data}) => {
      this.setState({suggestions: data.autocomplete.itemsReturned, error: false})
    })
    .catch((error) => {
      if (!error.isCanceled) {
        this.setState({error: true})
      }
    })
  }

  componentDidMount () {
    const searchTerm = this.input.value
    if (searchTerm) {
      this.getSuggestions(searchTerm)
    }
  }

  componentWillUnmount () {
    clearTimeout(this.timeout)
    if (this.suggestionQuery) {
      this.suggestionQuery.cancel()
    }
  }

  render () {
    const {searchTerm: initialSearchTerm, placeholder} = this.props
    const {suggestions, focus, error} = this.state
    const inputValue = this.input ? this.input.value : ''

    if (focus) {
      window.document.body.style.overflowY = 'hidden'
    } else {
      if (window && window.document) {
        window.document.body.style.overflowY = null
      }
    }

    return (
      <div className="flex-auto h2 w-100 w-auto-l order-last order-0-l pb2 ph0-ns pb1-m pv2-l relative">
        <SearchInput
          placeholder={placeholder}
          initialSearchTerm={initialSearchTerm}
          onFocus={this.handleFocus}
          onChange={this.handleChange}
          onRef={this.handleRef}
          onKeyDown={this.handleKeyDown}
          onClick={this.handleClick}
          focus={focus}
        />
        <SearchPanel
          focus={focus}
          onClose={this.handleClose}
          inputValue={inputValue}
          suggestions={suggestions}
          error={error}
          onClearSearch={this.handleClearSearch}
        />
      </div>
    )
  }
}

SearchBar.propTypes = {
  searchTerm: PropTypes.string,
  client: PropTypes.object,
  placeholder: PropTypes.string,
}

export default withApollo(SearchBar)
