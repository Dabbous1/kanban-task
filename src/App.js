  import React, { Component } from 'react';
  import logo from './logo.svg';
  import Column from './Column';
  import AddCardForm from './AddCardForm';
  import Card from './Card';
  

  import './App.css';

class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        columns: [
          {
            name: 'Todos',
            cards: []
          },
          {
            name: 'Onprogress',
            cards: []
          },
          {
            name: 'Done',
            cards: []
          }, 
        ] 
      };
    }; 

    addCard = (card, cname, staticname) => {
      console.log("Adding a Card");
      const cards = { ...this.state.columns.cards };
      const cnames  = { ...this.state.columns.name };
      const staticnames = { ...this.state.columns.name };
      
      cards[`card${Date.now()}`] = card;
      cnames[`cname`] = cname;
      staticnames[`staticname`] = staticname; 

      this.setState({
        columns: [
          { 
            name: cnames,
            cards: cards
          },
          { 
            name: staticnames,
            cards: []
          },
          { 
            name: staticnames,
            cards: cards
          },
        ] 
      });
    };
    
  render() {
    return (
    <div className="App">
   {Object.keys(this.state.columns).map(key => (
      <Column key={key} details={this.state.columns[key]} />
    ))}
    <AddCardForm addCard={this.addCard} />
    </div>
    );
  }
}
export default App;




// {Object.keys(this.state.cards).map(key => (
//     <Todo key={key} details={this.state.cards[key]} />
//   ))}

// {this.state.columns.map((column, columnkey) => (
//   <Column
//     column={column}
//     columnkey={columnkey}
//     />
//   ))}

