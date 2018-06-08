import React, { Component } from 'react';
import Nav from './Nav';

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            img: '',
            content: '',
            author: '',
            authrPicture: ''
        }
    }

    render() {
        return (
            <div>Post
                <Nav/>
            </div>
        )
    }
}

export default Post;