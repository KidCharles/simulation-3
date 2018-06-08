import React, { Component } from 'react';
import Nav from './Nav';
import './Dash.css'

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
            <div className="post" >
                Post
                <p>title</p>
                <p>authorname</p>
                <p>prof pic</p>
            </div>
        )
    }
}

export default Post;