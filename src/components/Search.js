import React from 'react';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Search(props) {


    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                const query = e.target.childNodes[0].value;
                console.log(e.target.childNodes[0].value)
                props.createHandler(query)
            }}
            className="search-container">
            <input
                type="text"
                placeholder="Search for job position"
                className="search-form"
            />
            <button type="submit" className="searchButton">
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </form>
    )
}

export default Search;