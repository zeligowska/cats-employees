import React from 'react';
import { Link } from 'react-router-dom';

import './PageNavigation.css'

function PageNavigation(props) {
    let prev = parseInt(props.match.params.catNumber)-1;
    let next = parseInt(props.match.params.catNumber)+1;

    return (
        <div className="container-pages">
            <Link to={"/" + prev}><button className="button-pages">prev</button></Link>
            <Link to={"/" + next}><button className="button-pages">next</button></Link>
        </div>
    )
}

export default PageNavigation;