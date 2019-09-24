
import React from "react";
import { Link } from "react-router-dom"
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Jumbotron() {
    return (
        <div>

            <div className="jumbotron jumbotron-fluid jumboBox">
                <Link to="/" className='rtnHome' aria-pressed="true">Search for Another Book</Link>

                <div className="container">

                    <h1 className="display-4 gbooks">Google Books Search</h1>

                </div>

            </div>


        </div>
    );
}

export default Jumbotron;
