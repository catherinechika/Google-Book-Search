import React, {Component} from "react"
import axios from "axios";



 class SavedDisplay extends Component{
 state = {
     bookList : [], 
     refreshed: false
 }

 componentDidMount() {
    axios
        .get('/api/books')
        .then(res => this.setState({ 
            bookList: res.data, 
            refreshed: true }))
        .catch(err => console.log(err));
}

//   deleteBook(book){
// axios.delete("api/books", book).then(refreshPage())
//  }


render () {
    return (
        <div className="card">
            {this.state.bookList.map(results => (
                <div className='text' key={results._id}>
                    <h5 className="card-header">{results.title}</h5>
                    <div className="card-body">
                        <h5 className="card-title">{results.authors}</h5>
                        <p className="card-text">{results.description}</p>
                    </div>

                    <a href={results.infoLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-success">See More</a>
                    <button className="btn btn-outline-dark" >DELETE</button>
                </div>
            ))}

        </div>
    )
}
}
export default SavedDisplay 