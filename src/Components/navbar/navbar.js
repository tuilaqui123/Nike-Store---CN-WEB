import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHeart, faBagShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import './navbar.css'
import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {

    const linkStyle = {
        textDecoration: "none",
        color: "#111111"
    };

    const hidden = {
        display: "none"
    };

    return (
        <div className="navbar-container">
            <div className="header">
                <p>logo</p>
                <div className="login" >
                    <Link to="/SignUp" style={linkStyle}>
                        <p>Sign Up</p>
                    </Link>
                    <p>|</p>
                    <Link to="/SignIn" style={linkStyle}>
                        <p>Sign In</p>
                    </Link>
                </div>
                {/* <div className="is-login" style={hidden}> */}
                <Link to="/User" style={linkStyle}>
                    <div className="is-login">
                        <p>Hi, Qui</p>
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                </Link>
            </div>
            <div className="navbar">
                <p>logo</p>
                <div className="nav-section">
                    <ul className="nav-selection">
                        <Link to="/Home" style={linkStyle}>
                            <li>Home</li>
                        </Link>
                        <Link to="/d/new" style={linkStyle}>
                            <li>New & Featured</li>
                        </Link>
                        <Link to="/d/all-item" style={linkStyle}>
                            <li>Explore Nike</li>
                        </Link>
                        <Link to="/d/sale" style={linkStyle}>
                            <li>Sale Season</li>
                        </Link>
                    </ul>
                    <div className="nav-search">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search"
                        />
                    </div>
                    <div className="nav-other">
                        <Link to="/Favourite">
                            <FontAwesomeIcon icon={faHeart} className="heart-icon other-icon" />
                        </Link>
                        <Link to="/Cart">
                            <FontAwesomeIcon icon={faBagShopping} className="bag-icon other-icon" />
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Navbar;
