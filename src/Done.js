import React, {Component} from "react";
import Card from "./Card"


class Done extends Component {
    render() {
        return (
        <div className="column"> 
            <h1 className="Title">Done</h1>
           <Card />
        </div>
        );
    }
}

export default Done;