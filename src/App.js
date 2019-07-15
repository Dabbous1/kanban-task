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

    addCard = (card) => {
      console.log("Adding a Card");
      const cards = { ...this.state.columns.cards };
      cards[`card${Date.now()}`] = card;

      console.log(card.taskStatus)

      if (card.taskStatus === 'Todos') {
        this.setState({
          columns: [
            { 
              name: 'Todos',
              cards: cards
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
        });
      } else if (card.taskStatus === 'Onprogress') {
        this.setState({
          columns: [
            { 
              name: 'Todos',
              cards: []
            },
            { 
              name: 'Onprogress',
              cards: cards
            },
            { 
              name: 'Done',
              cards: []
            },
          ] 
        }); 
      } else {
        this.setState({
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
              cards: cards
            },
          ] 
        }); 
      }
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
