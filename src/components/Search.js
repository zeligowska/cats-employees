import React, { Component } from 'react';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Search extends Component {
    state = {
        query: ''
    }

    handleChange = (event) => {
        this.setState({ query: event.target.value })
    }

    keyDown = (event) => {
        if (!this.state.query) {
            return;
        }
        if (event.keyCode === 13) {
            this.props.createHandler(this.state.query)
            this.setState({ query: '' })
        }

    }

    render() {
        return (
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search for job position"
                    value={this.state.query}
                    onChange={this.handleChange}
                    onKeyDown={this.keyDown}
                    className="search-form"
                />
                <button type="submit" class="searchButton">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        )
    }
}

export default Search;