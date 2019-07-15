columns: [
    {
      name: 'Todos',
      cards: [
        { name: 'card A'}
      ]
    },
    {
      name: 'OnProgress',
      cards: [
        { name: 'card B'}
      ]
    },
    {
      name: 'Done',
      cards: [
        { name: 'card C'}
      ]
    }
  ]

  cards: [
    {
      cards: [
        { taskname: 'card A'}
      ]
    },
    {
      cards: [
        { taskname: 'card B'}
      ]
    },
    {
      cards: [
        { taskname: 'card C'}
      ]
    }
  ]  

// App.js

  {Object.keys(this.state.columns).map(key => (
    <AddCardForm 
    addCard={this.addCard}
    key={key}
    coldetails={this.state.columns[key]} 
    />
  ))}


// Add Card Form

addCardtoApp = event => {
  event.preventDefault();
  const card = {
      taskName: this.taskName.current.value, 
      taskDescription: this.taskDescription.current.value,
      taskPeriod: this.taskPeriod.current.value,
      
  };
   const taskStatus = {
      taskStatus: this.taskStatus.current.value,
  };

  const cname = taskStatus;
  const staticname = this.props.coldetails.name
  console.log(cname)
  console.log(staticname)
   
  if (cname === true && staticname === true  )  {
      this.props.addCard(card,cname,staticname)
  }
  // // this.props.addCard(card);
  event.currentTarget.reset();
};



// {Object.keys(this.state.cards).map(key => (
//     <Todo key={key} details={this.state.cards[key]} />
//   ))}

// {this.state.columns.map((column, columnkey) => (
//   <Column
//     column={column}
//     columnkey={columnkey}
//     />
//   ))}

