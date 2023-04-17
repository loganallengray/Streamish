import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../modules/authManager";

const Header = ({ isLoggedIn, userProfile }) => {

    console.log(isLoggedIn);

    return (
        <nav className="navbar navbar-expand navbar-dark bg-info">
            <Link to="/" className="navbar-brand">
                StreamISH
            </Link>
            <ul className="navbar-nav mr-auto">
                {isLoggedIn ?
                    <>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Feed
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/videos/add" className="nav-link">
                                New Video
                            </Link>
                        </li>
                        <li>
                            <Link onClick={(e) => logout()} className="nav-link">
                                Logout
                            </Link>
                        </li>
                    </> :
                    <>
                        <li>
                            <Link to="/login" className="nav-link">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link to="/register" className="nav-link">
                                Register
                            </Link>
                        </li>
                    </>}
            </ul>
        </nav>
    );
};

export default Header;