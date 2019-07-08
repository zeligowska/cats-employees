import React from 'react';

import './CatsList.css';

function CatsList(props) {
    console.log(props.cats[props.match.params.catNumber])
    return (
        <div className="container" key={props.match.params.catNumber}>
            {props.cats.map(cat => (
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