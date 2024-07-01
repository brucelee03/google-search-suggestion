import './index.css'

const SuggestionItem = props => {
  const {item, onClickingSuggestion} = props
  const {id, suggestion} = item

  const clickedSuggestion = () => {
    onClickingSuggestion(id, suggestion)
  }

  return (
    <li className="search-item">
      <div>
        <p className="suggestion">{suggestion}</p>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow-icon"
        alt="arrow"
        onClick={clickedSuggestion}
      />
    </li>
  )
}

export default SuggestionItem
