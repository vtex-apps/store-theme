import React, {Component, PropTypes} from 'react'
import SearchSuggestionList from './SearchSuggestionList'
import classNames from 'classnames/bind'
import style from './searchBar.css'

const cx = classNames.bind(style)

//eslint-disable-next-line
class SearchPanel extends Component {
  render () {
    const {focus, onClose: handleClose, inputValue, suggestions, error, onClearSearch: handleClearSearch} = this.props
    return (
      <div className={`${cx('panel')} flex fixed left-0 bottom-0 right-0 center overflow-hidden bg-white ${focus ? `w-100 h-100 top-0 br0 o-100 z-9999 ph0 ph6-l pt6 pb3 ${cx('p-events-auto')}` : `w1 h1 top-2 br4 o-0 z-0 ${cx('p-events-none')}`}`}>
        <button
          onClick={handleClose}
          className="close pointer absolute top-0 left-0 bg-black-40 white bn pa2 w2 h2 lh-solid"
          type="button"
          >
          &times;
                </button>
        {
          focus
            ? <SearchSuggestionList
              input={inputValue}
              suggestions={suggestions}
              error={error}
              onClearSearch={handleClearSearch}
              />
            : null
        }
      </div>
    )
  }
}

SearchPanel.propTypes = {
  focus: PropTypes.bool,
  onClose: PropTypes.func,
  inputValue: PropTypes.string,
  suggestions: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.bool,
  onClearSearch: PropTypes.func,
}

export default SearchPanel
