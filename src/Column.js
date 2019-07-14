import React, {Component} from "react";
import Card from "./Card"


class Column extends Component {
    render() {
        return (
        <div className="column"> 
            <h1 className="Title">{this.props.details.name}</h1>
            {Object.keys(this.props.details.cards).map( keycard => (
                <Card keycard={keycard} data={this.props.details.cards[keycard]} /> 
            ))}     
        </div>
        );
    }
}

export default Column;


// {this.props.details.cards.map(card => ( 
//     <Card card={card} data={console.log(this.props.details.cards[card])} />
// ))}    

// {Object.keys(this.state.cards).map(key => (
//     <Todo key={key} details={this.state.cards[key]} />
//   ))}

// {this.state.columns.map((column, columnkey) => (
//     <Column
//       column={column}
//       columnkey={columnkey}
//       />
//     ))}


// {this.props.column.cards.map((card, cardkey) => (
//     <Card 
//         card={card}
//         cardkey={cardkey}
//         />
//     ))}