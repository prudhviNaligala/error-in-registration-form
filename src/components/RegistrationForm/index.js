import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isSubmitted: false,
    firstNameError: false,
    lastNameError: false,
  }

  onSubmitForm = event => {
    const {firstName, lastName} = this.state
    event.preventDefault()
    if (firstName && lastName) {
      this.setState({
        isSubmitted: true,
        lastNameError: false,
        firstNameError: false,
      })
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    if (!firstName) {
      this.setState({firstNameError: true})
    } else {
      this.setState({firstNameError: false})
    }
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    if (!lastName) {
      this.setState({lastNameError: true})
    } else {
      this.setState({lastNameError: false})
    }
  }

  onReset = () => {
    const {firstName, lastName} = this.state
    this.setState({
      isSubmitted: false,
      firstName,
      lastName,
      firstNameError: false,
      lastNameError: false,
    })
  }

  onRenderSubmit = () => (
    <div className="card">
      <div className="form">
        <img
          className="success-image"
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
        />
        <p>Submitted Successfully</p>
        <button type="button" onClick={this.onReset}>
          Submit Another Response
        </button>
      </div>
    </div>
  )

  render() {
    const {
      isSubmitted,
      firstNameError,
      lastNameError,
      firstName,
      lastName,
    } = this.state
    return (
      <>
        <div className="registration-container">
          {!isSubmitted ? (
            <div>
              <h1>Registration Form</h1>
              <div className="card">
                <form className="form" onSubmit={this.onSubmitForm}>
                  <label
                    htmlFor="firstName"
                    onChange={this.onChangeFirstName}
                    onBlur={this.onBlurFirstName}
                    value={firstName}
                  >
                    FIRST NAME
                  </label>
                  <input
                    id="firstName"
                    className="input-container"
                    type="txt"
                  />
                  {firstNameError && <p>*Required</p>}
                  <label
                    htmlFor="lastName"
                    onChange={this.onChangeLastName}
                    onBlur={this.onBlurLastName}
                    value={lastName}
                  >
                    LAST NAME
                  </label>
                  <input
                    id="lastName"
                    className="input-container"
                    type="password"
                  />
                  {lastNameError && <p>*Required</p>}
                  <div>
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            this.onRenderSubmit()
          )}
        </div>
      </>
    )
  }
}

export default RegistrationForm
