import React from 'react';
import { Link } from 'react-router-dom';

import './PageNavigation.css'

function PageNavigation(props) {
    let prev = parseInt(props.match.params.catNumber) - 1;
    let next = parseInt(props.match.params.catNumber) + 1;

    if (props.match.params.catNumber === undefined && props.length !== 0) {
        prev = 0;
        next = 1;
    }

    if (props.match.params.catNumber === '0')
        prev = 0;

    if (props.match.params.catNumber !== '0' && parseInt(props.match.params.catNumber) >= ((props.length) / 5) - 1)
        next = props.length / 5 - 1;

    if (props.length === 0)
        next = 0;


    return (
        <div className="container-pages">
            <Link to={"/" + prev}><button className="button-pages">prev</button></Link>
            <Link to={"/" + next}><button className="button-pages">next</button></Link>
        </div>
    )
}

export default PageNavigation;