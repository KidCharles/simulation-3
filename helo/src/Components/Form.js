import React, { Component } from 'react';
import Nav from './Nav';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            img: '',
            content: ''
        }
    }

    handleTitleChange() { }
    handleImgChange() { }
    handleContentChange() { }
    submitNewPost() { }

    render() {
        return (
            <div>Form
                <Nav />
            </div>
        )
    }
}

export default Form;