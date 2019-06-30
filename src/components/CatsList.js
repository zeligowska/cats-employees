import React, { Component } from 'react';
import faker from 'faker';
import uuid from 'uuid/v1';
import {Link} from 'react-router-dom';

import Search from './Search';
import './CatsList.css';

class CatsList extends Component {
    state = {
        cats: [],
        filteredCats: [],
        query: ''
    }

    handleSearch = (query) => {
        console.log('query: ' + query);

        const filteredCats = this.state.cats.filter((element) => {
            return element.title.toUpperCase().includes(query.toUpperCase());
        });

        this.setState({ filteredCats });
        console.log(filteredCats);
    }

    importCats() {
        const headers = {
            'x-api-key': 'd24b427d-578e-4609-86bd-b36555c3875c'
        };
        fetch('https://api.thecatapi.com/v1/images/search?limit=30', { headers })
            .then(response => response.json())
            .then(data => {
                const cats = [];
                data.forEach(element => {
                    const cat = {
                        id: uuid(),
                        firstName: faker.name.firstName(),
                        lastName: faker.name.lastName(),
                        title: faker.name.jobTitle(),
                        url: element.url,
                        phone: faker.phone.phoneNumber(),
                    };
                    cats.push(cat);
                });
                this.setState({ cats });
                this.setState({filteredCats: cats});
            });
    }

    componentDidMount() {
        this.importCats();
    }

    refresh = () => {
        const cats = this.state.cats;
        this.setState({filteredCats: cats});
    }

    render() {
        return (
            <div className="container">
                <Search createHandler={this.handleSearch} />
                {this.state.filteredCats.map(cat => (
                    <div key={cat.id} className="cat">
                        <div className="photo">
                            <img src={cat.url} alt="" />
                        </div>
                        <div className="data">
                            <div>First name: {cat.firstName}</div>
                            <div>Last name: {cat.lastName}</div>
                            <div>Phone: {cat.phone}</div>
                            <div>Title: {cat.title}</div>
                        </div>
                    </div>
                ))}
                <button className="button-refresh" onClick={this.refresh}>Back to full list</button>
            </div>
        )
    }
}

export default CatsList;