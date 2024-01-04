import './navbar.css'
import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHeart, faBagShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from '../../Context/AppContext';

const Navbar = () => {

    const { nikeSide, sportSide, customer } = useContext(AppContext)
    const navigate = useNavigate()

    const [isHover, setIsHover] = useState(false)
    const [btnHover, setBtnHover] = useState('')
    const [message, setMessage] = useState('');

    const linkStyle = {
        textDecoration: "none",
        color: "#111111"
    };

    function handleOnHover(event) {
        const liText = event.currentTarget.textContent;
        setBtnHover(liText)
        setIsHover(true)
    }

    function handleOutHover() {
        setIsHover(false)
    }

    function choseType(event) {
        const liText = event.currentTarget.querySelector('p').textContent
        if (btnHover === 'Explore Nike') navigate(`/d/nikes/${liText}`)
        if (btnHover === 'Shop by Sport') navigate(`/d/sport/${liText}`)
    }

    function handleChange(event) {
        setMessage(event.target.value);
    };

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            handleSearch()
        }
    };

    function handleSearch() {
        if (message !== '')
            navigate(`/s/${message}`)
    }



    return (
        <div className="navbar-container">
            <div className="header" onMouseEnter={handleOutHover}>
                <p>logo</p>
                {!customer ?
                    <div className="login" >
                        <Link to="/SignUp" style={linkStyle}>
                            <p>Sign Up</p>
                        </Link>
                        <p>|</p>
                        <Link to="/SignIn" style={linkStyle}>
                            <p>Sign In</p>
                        </Link>
                    </div> :
                    <Link to="/User" style={linkStyle}>
                        <div className="is-login">
                            <p>{'Hi, ' + customer?.name}</p>
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </Link>
                }
            </div>
            <div className="navbar">
                <p>logo</p>
                <div className="nav-section">
                    <ul className="nav-selection">
                        <Link to="/Home" style={linkStyle}>
                            <li>Home</li>
                        </Link>
                        <Link to="/d/jordan" style={linkStyle}>
                            <li onMouseEnter={handleOutHover}>Jordan to You</li>
                        </Link>
                        <Link to="/d/nikes" style={linkStyle}>
                            <li onMouseEnter={handleOnHover} >Explore Nike</li>
                        </Link>
                        <Link to="/d/sport" style={linkStyle}>
                            <li onMouseEnter={handleOnHover} >Shop by Sport</li>
                        </Link>
                    </ul>
                    <div className="nav-search" onMouseEnter={handleOutHover}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" onClick={handleSearch} />
                        <input
                            type="text"
                            placeholder="Search"
                            value={message}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <div className="nav-other" onMouseEnter={handleOutHover}>
                        <Link to="/Favourite">
                            <FontAwesomeIcon icon={faHeart} className="heart-icon other-icon" />
                        </Link>
                        <Link to="/Cart">
                            <FontAwesomeIcon icon={faBagShopping} className="bag-icon other-icon" />
                        </Link>
                    </div>
                </div>
            </div>
            {isHover && (
                <ul className="navbar-hover"
                    onMouseLeave={handleOutHover}
                >
                    {btnHover === 'Explore Nike' && (
                        <>
                            {nikeSide.map((value, index) => (
                                <li key={index} onClick={choseType}>
                                    <p>{value}</p>
                                </li>
                            ))}
                        </>
                    )}

                    {btnHover === 'Shop by Sport' && (
                        <>
                            {sportSide.map((value, index) => (
                                <li key={index} onClick={choseType}>
                                    <p>{value}</p>
                                </li>
                            ))}
                        </>
                    )}
                </ul>
            )}

        </div>
    );
}

export default Navbar;
