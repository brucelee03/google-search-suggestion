import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  constructor(props) {
    super(props)
    this.state = {searchInput: '', suggestionsList: props.suggestionsList}
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickingSuggestion = (id, suggestion) => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput, suggestionsList} = this.state
    const searchResults = suggestionsList.filter(item =>
      item.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="search-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-logo"
          alt="google logo"
        />
        <div className="searchInput-container">
          <div className="search-bar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-icon"
              alt="search icon"
            />
            <input
              type="search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
              placeholder="Search Google"
              className="search"
            />
          </div>
          <ul className="suggestion-container">
            {searchResults.map(item => (
              <SuggestionItem
                item={item}
                onClickingSuggestion={this.onClickingSuggestion}
                key={item.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
