import React from "react"


function SavedDisplay(props) {
    return (
        <div className="card">
            {props.results.map(results => (
                <div className='text' key={results._id}>
                    <h5 className="card-header">{results.title}</h5>
                    <div className="card-body">
                        <h5 className="card-title">{results.authors}</h5>
                        <p className="card-text">{results.description}</p>
                    </div>

                    <a href={results.infoLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-success">See More</a>

                </div>
            ))}

        </div>
    )
}
export default SavedDisplay 