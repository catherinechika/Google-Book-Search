import React from "react"
import { Link } from "react-router-dom"


function SavedDisplay(props) {
    return (
        <div className="card">
            <h5 className="card-header">Featured</h5>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link href="#" className="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
    )
}
export default SavedDisplay