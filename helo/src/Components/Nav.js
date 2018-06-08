import React from 'react';
import { Link } from 'react-router-dom';
// import './Header.css';
// import logo from './logo.png';

export default function Nav() {
    return (
        <div>
            <div>
                <h1>username</h1>

                <Link to='/dashboard' >
                    <button>Home</button>
                </Link>

                <Link to='/post/:postid' >
                    <button>New Post</button>
                </Link>

                <Link to='/' >
                    <button>Logout</button>
                </Link>

            </div>
        </div>
    )
}