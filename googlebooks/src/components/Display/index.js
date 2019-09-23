import React from "react"
import { Link } from "react-router-dom"


function Display(props) {
    return (
        <div>
            <div className="card">
                {props.result.map(result => (
                    <div className='text'>
                        <h5 className="card-header">{result.volumeInfo.title}</h5>
                        <div className="card-body">
                            <h5 className="card-title">{result.volumeInfo.authors[0]}</h5>
                            <p className="card-text">{result.volumeInfo.description}</p>
                        </div>

                        <Link href={result.volumeInfo.infoLink} type="button" className="btn btn-outline-success">See More</Link>
                        <Link onClick={props.handleSave} type="button" className="btn btn-outline-dark">Save</Link>
                    </div>
                ))}

            </div>
        </div>
    )
}
export default Display