
import React from "react";
// import React, { Component }  from 'react';
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Jumbotron() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid jumboBox">
                <div className="container">
                    <h1 className="display-4 gbooks">Google Books Search</h1>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;
