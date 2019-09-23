import React, { Component } from "react";
import { Link } from "react-router-dom"
import "./style.css";

function SearchJumbotron(props) {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid jumboBox">
                <div className="container">
                    <h1 className="display-4 gbooks">Google Books Search</h1>
                    <form>
                        <div className="form-group">
                            <input
                                onChange={props.handleInputChange}
                                value={props.search}
                                name="search"
                                type="text"
                                className="form-control"
                                placeholder="Search books"
                                id="search"
                            />
                            <button
                                onClick={props.handleFormSubmit}
                                className="btn btn-primary mt-3">
                                Search
        </button>
                           
                        </div>
                    </form>
                    <Link to="/saved" className="btn btn-secondary btn-lg active savedBtn" role="button" aria-pressed="true">View Saved Books</Link>
                </div>
            </div>
        </div>
    );
}

export default SearchJumbotron;
