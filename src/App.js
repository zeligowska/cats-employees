import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import faker from 'faker';
import uuid from 'uuid/v1';
import { createBrowserHistory } from "history";

import CatsList from './components/CatsList';
import About from './components/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Search from './components/Search';
import PageNavigation from './components/PageNavigation';


import './App.css';



class App extends Component {

  state = {
    cats: [],
    filteredCats: [],
    query: '',
    redirect: false,
    history: createBrowserHistory()
  };

  handleSearch = (query) => {
    const filteredCats = this.state.cats.filter((element) => {
      return element.title.toUpperCase().includes(query.toUpperCase());
    });
    this.state.history.push('/');
    this.setState({ filteredCats });
  };

  async importCats() {
    return new Promise((resolve, reject) => {
      const headers = {
        'x-api-key': 'd24b427d-578e-4609-86bd-b36555c3875c'
      };
      fetch('https://api.thecatapi.com/v1/images/search?limit=35', { headers })
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
          console.log(cats);
          resolve(cats);
        }).catch(err => reject(err));
    })
  };

  async componentWillMount() {
    const cats = await this.importCats();
    this.setState({ cats, filteredCats: cats });
  };

  refresh = () => {
    const cats = this.state.cats;
    this.setState({ filteredCats: cats });
    console.log('refresh');
  };

  render() {

    const links = [
      { url: '/', text: 'Cats List' },
      { url: '/about', text: 'About' }
    ]

    return (
      <BrowserRouter history={this.state.history}>
        <div className="App">
          <NavBar links={links} />

          <h1>List of excellent cat employees</h1>
          <Route
            path='/:catNumber?' render={(props) =>
              <>
                <Search createHandler={this.handleSearch} />
                <CatsList query={this.state.query} cats={this.state.filteredCats} refresh={this.refresh} {...props} />
                <PageNavigation length={this.state.cats.length} {...props} />
              </>
            }
          />
          <Route path="/About" component={About} />
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;