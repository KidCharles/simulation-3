import React, { Component } from 'react';
import Nav from './Nav';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
    }

    render() {
        return (
            <div>
                <Nav />
            </div>
        )
    }
}

export default Dashboard;