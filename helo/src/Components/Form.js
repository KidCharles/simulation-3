import React, { Component } from 'react';
import Nav from './Nav';
import { connect } from 'react-redux';
import axios from 'axios';

// import { addUser } from '../ducks/reducer';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            img: '',
            content: ''
        }
    }

    handleTitleChange(val) {
        this.setState({ title: val })
    }
    handleImgChange(val) {
        this.setState({ img: val })
    }
    handleContentChange(val) { 
        this.setState({ content: val })
    }
    submitNewPost() { 
        let body={
            title:this.props.title,
            img:this.props.img,
            content: this.props.content
        }
        !body.title
        ?
        alert('please fill out form correctly')
        :
        axios.post('/post', body).then(() => this.props.history.push('/') )
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <Nav />
                <div>
                    <h1>New Post</h1>
                    Title:<input type='' className='' onChange={(e) => this.handleTitleChange(e.target.value)} />
                    <br />
                    <br />
                    URL Image:<input type='' className='' onChange={(e) => this.handleImgChange(e.target.value)} />
                    <br />
                    <br />
                    Content:<input type='' className=''onChange={(e) => this.handleContentChange(e.target.value)} />
                    <br/>
                    <button onChange={()=> this.submitNewPost()}>Post</button>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userId: state.userId,
        title: state.title,
        img: state.img,
        content: state.contnent
    }
}

export default connect(mapStateToProps)(Form)