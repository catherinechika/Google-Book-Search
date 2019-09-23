import React, { Component } from "react";
import SavedDisplay from "../components/SavedDisplay";
import Jumbotron from "../components/Jumbotron";
import API from "../components/utils/API";


class Saved extends Component {
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
    render() {
        return (
            <div>

                <Jumbotron
                    handleInputChange={this.handleInputChange}
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <SavedDisplay
                    result={this.state.result} />

            </div>
        );
    }
}

export default Saved;
