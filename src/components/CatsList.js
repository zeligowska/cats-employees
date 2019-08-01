import React, { Component } from 'react';


import './CatsList.css';

class CatsList extends Component {

    // const currentCats = props.cats.filter((cat, i) => {
    //     i ? props.match.params.catNumber * 5
    // })

    state = {
        currentCats: [...this.props.cats],
        page: 0
    };

    componentDidMount() {
        let res =[...this.props.cats];
        while (res.length) {
            let cats = [...this.state.currentCats].push(res.splice(0, 5));
            this.setState({currentCats: cats});
        }
        let pg = (this.props.match.params.catNumber !== undefined) && (this.props.match.params.catNumber !== null) ? this.props.match.params.catNumber : 0;
        this.setState({page: pg});
    }

    render() {
        return (
            <div className="container" >
                {this.state.currentCats[this.state.page] !== undefined && this.state.currentCats[this.state.page].map(cat => (
                    <div key={"" + this.state.page + cat.id} className="cat">
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
                <button className="button-refresh" onClick={this.props.refresh}>Back to full list</button>
            </div>
        )
    }
}

export default CatsList;