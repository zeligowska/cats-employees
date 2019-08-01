import React, { useState } from 'react';


import './CatsList.css';

function CatsList(props) {

    // const currentCats = props.cats.filter((cat, i) => {
    //     i ? props.match.params.catNumber * 5
    // })

    let res = [...props.cats];
    console.log(res);
    let currentCats = [];
    while (res.length) {
        currentCats.push(res.splice(0, 5));
    }
    let page = (props.match.params.catNumber !== undefined) && (props.match.params.catNumber !== null) ? props.match.params.catNumber: 0;

    return (
        <div className="container" >
            {currentCats[page] !== undefined && currentCats[page].map(cat => (
                <div key={"" + page + cat.id} className="cat">
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
            <button className="button-refresh" onClick={props.refresh}>Back to full list</button>
        </div>
    )
}

export default CatsList;