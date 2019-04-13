import React from "react";
import { Jumbotron } from 'reactstrap';

function Jumbo(props) {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-5" >(React) Google Books Search</h1>
                <p className="lead" > Search for and Save Books of Interes</p>
            </Jumbotron>
        </div>
    )
}

export default Jumbo;



