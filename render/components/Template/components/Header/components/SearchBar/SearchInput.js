import React, {Component, PropTypes} from 'react'
import classNames from 'classnames/bind'
import style from './searchBar.css'

const cx = classNames.bind(style)

class SearchInput extends Component {
  render () {
    const {placeholder, initialSearchTerm, onFocus: handleFocus, onChange: handleChange, onRef: handleRef, onKeyDown: handleKeyDown, onClick: handleClick, focus} = this.props
    return (
      <label className="w-100">
        <span className="clip">Search</span>
        <div className={`center left-0 bottom-0 right-0 h2 ${focus ? 'w-100 ph2 mw8-ns fixed z-max top-2' : ' w-100 w-90-l absolute z-2 top-0'}`}>
          <input
            type="search"
            className={`${cx('search-input')} br-pill db center w-100 pv2 pl3 pl4-l pr4 bn outline-0 bg-black-10 dark-primary ${focus ? 'f4 h3' : 'f5 h2'}`}
            placeholder={placeholder}
            defaultValue={initialSearchTerm || ''}
            onFocus={handleFocus}
            onChange={handleChange}
            ref={handleRef}
            onKeyDown={handleKeyDown}
            />
          <button
            className={`${cx('search-submit')} lh-solid pointer bg-transparent pv2 pt2-l bn light-primary absolute right-0 top-0 ${focus ? 'h3 w3' : ' h2 w2'}`}
            type="button"
            onClick={handleClick}
            >
            <span className="clip">Search</span>
            <svg className="v-mid o-20" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path className="fill-dark-primary" d="M12.5 11h-.79l-.28-.27C12.41 9.59 13 8.11 13 6.5 13 2.91 10.09 0 6.5 0S0 2.91 0 6.5 2.91 13 6.5 13c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L17.49 16l-4.99-5zm-6 0C4.01 11 2 8.99 2 6.5S4.01 2 6.5 2 11 4.01 11 6.5 8.99 11 6.5 11z" />
            </svg>
          </button>
        </div>
      </label>
    )
  }
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  initialSearchTerm: PropTypes.string,
  onRef: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onClick: PropTypes.func,
  focus: PropTypes.bool,
}

export default SearchInput
