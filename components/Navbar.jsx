import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <>
            <div>
                <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/Home">{props.title}</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">{props.abouttitle}</Link>
                                </li>
                            </ul>
                            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`} >
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleswitch} />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
                            </div>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-primary" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>

        </>

    )
}
Navbar.prototype = {
    title: PropTypes.string,
    abouttitle: PropTypes.string // so whenver you enter any value other than string in app.js it will show error to enter string value
}

// Navbar.defaultProps = {  // this is used if you havent set the value of these title and abouttitle then it will  be set by default
//     title: 'Home Page',
//     abouttitle: 'About Us',
// }
