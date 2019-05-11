import React from "react";
import { Jumbotron } from 'reactstrap';

function Jumbi(props) {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-5 text-center" >(React) Google Books Search</h1>
                <p className="lead text-center" > Search for and Save Books of Interes</p>
            </Jumbotron>
        </div>
    )
}

export default Jumbi;