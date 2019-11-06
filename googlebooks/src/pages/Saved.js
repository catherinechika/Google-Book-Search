import React, { Component } from "react";
import SavedDisplay from "../components/SavedDisplay";
import Jumbotron from "../components/Jumbotron";
import axios from 'axios'


class Saved extends Component {
    state = {
        search: "",
        results: []
    }

    handleInputChange = event => {
        event.preventDefault() 
        this.setState({
            search: event.target.value
        })
        console.log(event.target.value)

    }
    componentDidMount() {
        axios
            .get('/api/books')
            .then(res => this.setState({ results: res.data }))
            .catch(err => console.log(err));
    }


    render() {
        return (
            <div>

                <Jumbotron />
                <SavedDisplay
                    results={this.state.results} />

            </div>
        );
    }
}

export default Saved;
