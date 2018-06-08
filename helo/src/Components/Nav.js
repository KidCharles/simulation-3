import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';
//import the action creators


function Nav(props) {
    return (
        <div className='nav' >
            <div>
                <h1>username</h1>
                <p>{props.profile_pic}</p>
                <p>{props.username}</p>
                
                <Link to='/dashboard' >
                    <button>Home</button>
                </Link>
               <br/ >
               <br/ >
                <Link to='/post/:postid' >
                    <button>New Post</button>
                </Link>
                <br/ >
                <br/ >
               
                <Link to='/' >
                    <button>Logout</button>
                </Link>

            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        username: state.username,
        profile_pic: state.profile_pic
    }
}

export default connect(mapStateToProps)(Nav)