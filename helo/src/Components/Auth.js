import React, { Component } from 'react';
import axios from 'axios'

class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsernameChange(val) {
        this.setState({username:val})
     }
    handlePasswordChange(val) {
        this.setState({password:val})
     }

     login() {
        const { username, password } = this.state
        if (username && password) {
          axios.post('/api/login', { username: username.toLowerCase(), password: password }).then(res => {
            // // console.log(res.data)
            // if (res.data.length !== 0) {
            //   this.setState({ error: res.data })
            // } else {
            //   this.setState({ loggedIn: 'You logged in successfully!~~', error: '' })
            // }
          })
        } else {
          this.setState({ error: 'Please fill in both fields' })
        }
      }

    register() {
        const { username, password } = this.state
        if (username && password) {
          axios.post('/api/register', { username: username.toLowerCase(), password: password }).then(res => {
            if (res.data.length !== 0) {
              console.log(res.data)
              this.setState({ error: res.data })
            } else {
              this.setState({ loggedIn: 'You are now registered and have logged in successfully!', error: '' })
              //this.props.history.push(/redirect URL)
            }
          })
        } else {
          this.setState({ error: 'Please fill in both fields' })
        }
      }

    render() {
      // console.log(this.state)
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
                    <button type='' className=''> login </button>
                    <button type='' className=''> Register </button>
                </div>
            </div>
        )
    }
}

export default Auth;