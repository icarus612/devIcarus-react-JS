import React from 'react';
import IndexRoutes from '../../routes.js';

let NavBar = (props)=> {
    return (
        <nav>
            <div className="d-flex flex-row justify-content-end align-items-center nav-bar">
                    <a href="/">Home</a> |
                    <a href="/get-quote">Get Quote</a> |
                    <a href="/contact-us">Contact Us</a>
            </div>
        </nav>
       
    )
}
export default NavBar;