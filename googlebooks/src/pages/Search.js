import React, { Component } from "react";
import SearchJumbotron from "../components/SearchJumbotron";
import Display from "../components/Display"
import API from "../components/utils/API";
import axios from 'axios'


class Search extends Component {
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

    handleFormSubmit = event => {
        event.preventDefault();
        API.search(this.state.search)
            .then(res => this.setState({ results: res.data.items }))
            .catch(err => console.log(err));

    };
    handleSave = event => {
        event.preventDefault();
        console.log('saved')
        axios.post('/api/saved', this.state.results)
    };

    render() {
        return (
            <div>
                <SearchJumbotron
                    handleInputChange={this.handleInputChange}
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <Display
                    results={this.state.results}
                    handleSave={this.handleSave} />

            </div>
        );
    }
}

export default Search;
