  import React, { Component } from 'react';
  import logo from './logo.svg';
  import Todo from './Todo';
  import Onprogress from './Onprogress';
  import Done from './Done';

  import './App.css';

class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        cards: [
          {
            taskname: 'Card A'
          }
        ]
      }
    }
    
  render() {
    return (
    <div className="App">
        <Todo />
        <Onprogress />
        <Done />
    </div>
    );
  }
}

export default App;
