import React, {Component} from 'react';

class Search extends Component {
    state = {
        query: ''
    }

    handleChange = (event) => {
        this.setState({ query: event.target.value })
    }

    keyDown = (event) => {
        if(!this.state.query) {
            return;
        }
        if (event.keyCode === 13) {
            this.props.createHandler(this.state.query)
            this.setState({ query: '' })
        }

    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.state.query}
                    onChange={this.handleChange}
                    onKeyDown={this.keyDown}
                ></input>
            </div>
        )
    }
}

export default Search;