import './index.css'

const PasswordItem = props => {
  const {eachPassword, onDeleteList, checked} = props
  const {website, username, password, id} = eachPassword

  const activateDeleteIcon = () => {
    onDeleteList(id)
  }

  return (
    <li className="list-container">
      <div className="initial-container">
        <div className="initial-name-container">
          <p className="initial-name"> {website[0]} </p>
        </div>
      </div>
      <div className="names-container">
        <p className="names"> {website} </p>
        <p className="names"> {username} </p>
        {checked ? (
          <p className="names"> {password} </p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
            alt="stars"
            className="stars"
          />
        )}
      </div>
      <div className="delete-container">
        <button
          type="button"
          data-testid="delete"
          onClick={activateDeleteIcon}
          type="button-delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
