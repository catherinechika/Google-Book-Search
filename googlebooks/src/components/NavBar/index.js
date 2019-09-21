import React from "react";
// import React, { Component }  from 'react';
import "./style.css";
import { Link } from "react-router-dom"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
        <div>
            <ul className="nav justify-content-end bar">
                <li className="nav-item">
                    <Link to="/saved" class="btn btn-secondary btn-lg active savedBtn" role="button" aria-pressed="true">View Saved Books</Link>
                </li>

            </ul>
        </div>
    );
}

export default Navbar;
