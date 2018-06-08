import React, { Component } from 'react';
import Nav from './Nav';
import Post from './Post';
import './Dash.css'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
    }

    componentDidMount(){
        
    }

    handleChange(val) {
        this.setState({ search: val })
    }

    handleSearch() { }

    handleReset() {
        this.setState({ search: '' })
    }

    handleMyPost(){
        this.setState({userposts: !this.state.userposts})
    }

    render() {
        let mappedPost = this.state.posts.map((e, i) => {
            return (
                <div key={i}>
                <Post
                user={e}
                />
                </div>
            )
        })
        return (
            <div >
                <Nav />
                <div>
                    <input onChange={(e) => this.handleChange(e.target.value)} value={this.state.search}/>
                    <button onClick={() => this.handleSearch()} >Search</button>
                    <button onClick={() => this.handleReset()} >Reset</button>
                    MyPost:
                    <input type='checkbox' onClick={()=> this.handleMyPost()} />
                </div>
                <Post/>
                {mappedPost}
                
            </div>
        )
    }
}

export default Dashboard;