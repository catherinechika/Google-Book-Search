import React, { Component } from "react";
import SearchJumbotron from "../components/SearchJumbotron";
import Display from "../components/Display"
import API from "../components/utils/API";
import axios from 'axios'


class Search extends Component {
    state = {
        search: "",
        result: []
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
        API.search('The Alchemist')
            .then(res => this.setState({ result: res.data.items }))
            .catch(err => console.log(err));

    };
    handleSave = event => {
        event.preventDefault();
        console.log('saved')
        axios.post('/api/saved', this.state.result)
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
                    key={this.state.result.id}
                    result={this.state.result}
                    handleSave={this.handleSave} />

            </div>
        );
    }
}

export default Search;
