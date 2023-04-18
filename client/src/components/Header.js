import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../modules/authManager";

const Header = ({ isLoggedIn, userProfile }) => {

    console.log(isLoggedIn);

    return (
        <nav className="navbar navbar-expand navbar-dark bg-info">
            <Link to="/" className="navbar-brand ps-4">
                StreamISH
            </Link>
            <ul className="navbar-nav mr-auto justify-content-between w-100">
                {isLoggedIn ?
                    <>
                        <div className="d-flex">
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
                        </div>
                        <li className="d-flex">
                            <div className="nav-link">
                                {userProfile?.name}
                            </div>
                            <Link onClick={(e) => logout()} className="nav-link align-self-end pe-4">
                                Logout
                            </Link>
                        </li>
                    </> :
                    <div className="d-flex">
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
                    </div>}
            </ul>
        </nav>
    );
};

export default Header;