import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class Password extends Component {
  state = {
    passwordsList: [],
    websiteInput: '',
    userNameInput: '',
    passwordInput: '',
    searchInput: '',
    isChecked: false,
  }

  onChangeWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({userNameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onAddPasswords = event => {
    event.preventDefault()
    const {websiteInput, userNameInput, passwordInput} = this.state
    const newPassword = {
      id: v4(),
      website: websiteInput,
      username: userNameInput,
      password: passwordInput,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      websiteInput: '',
      userNameInput: '',
      passwordInput: '',
    }))
  }

  onDeleteList = id => {
    const {passwordsList} = this.state
    const updatedPasswordsList = passwordsList.filter(
      eachPassword => id !== eachPassword.id,
    )

    this.setState({
      passwordsList: updatedPasswordsList,
    })
  }

  toggleButton = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
    }))
  }

  noPasswordImage = () => {
    const {passwordsList} = this.state
    if (passwordsList.length === 0) {
      return (
        <div className="no-password-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="no-password-image"
          />
          <p> No Passwords </p>
        </div>
      )
    }
  }

  render() {
    const {passwordsList} = this.state
    const {
      websiteInput,
      userNameInput,
      passwordInput,
      searchInput,
      isChecked,
    } = this.state
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="enter-password-container">
          <form className="write-password-container">
            <h1 className="heading"> Add New Password </h1>
            <div className="input-container">
              <div className="input-image-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="user-logo"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="user-input"
                  placeholder="Enter Website"
                  value={websiteInput}
                  onChange={this.onChangeWebsite}
                />
              </div>
            </div>
            <div className="input-container">
              <div className="input-image-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                  alt="username"
                  className="user-logo"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="user-input"
                  placeholder="Enter Username"
                  value={userNameInput}
                  onChange={this.onChangeUsername}
                />
              </div>
            </div>
            <div className="input-container">
              <div className="input-image-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="user-logo"
                />
              </div>
              <div>
                <input
                  type="password"
                  className="user-input"
                  placeholder="Enter Password"
                  value={passwordInput}
                  onChange={this.onChangePassword}
                />
              </div>
            </div>
            <div className="button-container">
              <button
                type="submit"
                className="button"
                onClick={this.onAddPasswords}
              >
                {' '}
                Add{' '}
              </button>
            </div>
          </form>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="image-password-manager"
            />
          </div>
        </div>
        <div className="show-password-container">
          <div className="password-count-search-container">
            <div className="password-count-container">
              <h1 className="password-para"> Your Passwords </h1>
              <p className="count"> {passwordsList.length} </p>
            </div>
            <div className="search-container">
              <div className="search-icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-icon"
                />
              </div>
              <div className="search-input-container">
                <input
                  type="search"
                  placeholder="Search"
                  className="search"
                  onChange={this.searchInput}
                  value={searchInput}
                />
              </div>
            </div>
          </div>
          <hr className="line" />
          <div className="checkbox-container">
            <input
              type="checkbox"
              className="check-box"
              id="checkbox"
              onClick={this.toggleButton}
            />
            <label htmlFor="checkbox" className="label-para">
              {' '}
              Show passwords{' '}
            </label>
          </div>
          {this.noPasswordImage()}
          <ul className="unordered-list">
            {passwordsList.map(eachList => (
              <PasswordItem
                key={eachList.id}
                eachPassword={eachList}
                onDeleteList={this.onDeleteList}
                checked={isChecked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Password
