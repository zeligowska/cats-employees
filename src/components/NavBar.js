import React, {Component} from 'react';
// import Link from '../Link'
import {Link} from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <header className="nav-container">
                {
                    this.props.links.map(link => {
                        return <Link key={link.url} to={link.url} className="links">{link.text}</Link>
                    })
                }
            </header>
        )
    }
}

export default NavBar;