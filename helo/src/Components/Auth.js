import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios'

import { addUser } from '../ducks/reducer';

class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
        error: '',
      loggedIn: ''
    }
  }

  handleUsernameChange(val) {
    this.setState({ username: val })
  }
  handlePasswordChange(val) {
    this.setState({ password: val })
  }

  login() {
    const { username, password } = this.state
    if (username && password) {
      axios.post('/login', { username: username.toLowerCase(), password: password }).then(res => {
        console.log(res.data)
        if (res.data.length !== 0) {
          this.setState({ error: res.data })
        } else {
          this.setState({ loggedIn: 'You logged in successfully!~~', error: '' })
          this.props.addUser(this.state);
          this.props.history.push('/dashboard')
        }
      })
    } else {
      this.setState({ error: 'Please fill in both fields' })
    }
  }

  register() {
    const { username, password } = this.state
    if (username && password) {
      console.log('register')
      axios.post('/register', { username: username.toLowerCase(), password: password }).then(res => {
        this.props.addUser(this.state);
        this.props.history.push('/dashboard')
      })
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <div>
          <p>logo</p>
          <h1>HELO</h1>
          Username:
                    <input onChange={(e) => this.handleUsernameChange(e.target.value)} />
          <br />
          <br />
          Password:
                    <input onChange={(e) => this.handlePasswordChange(e.target.value)} />
          <br />
          <br />
          <button onClick={() => this.login()} > login </button>
          <button onClick={() => this.register()} > Register </button>
          <h4>{this.state.error}</h4>
        <h2>{this.state.loggedIn}</h2>
        </div>
      </div >
    )
  }
}



export default connect(null, { addUser })(Auth);