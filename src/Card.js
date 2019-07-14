import React, {Component} from "react";

class Card extends Component {
    render() {
        return (
        <div className="card">
            <span className="title">{this.props.data.taskName}</span>
            {console.log(this.props.data)}
        </div>  
        );
    }
}

export default Card;
