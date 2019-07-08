import React from 'react';

import './CatsList.css';

function CatsList(props) {

    // const currentCats = props.cats.filter((cat, i) => {
    //     i ? props.match.params.catNumber * 5
    // })

    let res = props.cats;
    let currentCats = [];
    while (res.length) {
        currentCats.push(res.splice(0, 5));
    }

    return  (
        <div className="container" >
            {  currentCats[props.match.params.catNumber] !== undefined && currentCats[props.match.params.catNumber].map(cat => (
                <div key={"" + props.match.params.catNumber + cat.id} className="cat">
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