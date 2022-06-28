import { Component } from 'react'
import Person from './components/Person/Person'

class App extends Component {
  // State --> A way to create & manage your own data within the component
  // State are nothing but a normal JS Object
  state = {
    persons: [
      {id: 'person-one', name: 'Johnathan', age: 25},
      {id: 'person-two', name: 'Max', age: 23},
      {id: 'person-three', name: 'Daniel', age: 29},
      {id: 'person-four', name: 'Ted', age: 24},
      {id: 'person-five', name: 'John', age: 29}
    ],
    showPersons: false
  }

  onChangeHandler = () => {
    // DONOT DO THIS --> Donot mutate/ update/ change the state values directly
    // this.state.persons[0].name = 'John'
    this.setState({
      persons: [
        {name: 'John', age: 25},
        {name: 'Maxillian', age: 23},
        {name: 'Daniel', age: 29},
        {name: 'Teddy', age: 24}
      ]
    })
  }

  togglePersonHandler = () => {
    let doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  onNameChangedHandler = (eventParam) => {
    this.setState({
      persons: [
        {name: 'John', age: 25},
        {name: eventParam.target.value, age: 23},
        {name: 'Daniel', age: 29},
        {name: 'Teddy', age: 24}
      ]
    })
  }

  deletePersonHandler = (personId) => {
    const personsCopy = [...this.state.persons]
    personsCopy.splice(personId, 1)
    this.setState({persons: personsCopy})
  }

  render() {
    // JavaScript

    // CONDITIONAL RENDERING
    let myPersons = ( <div>Please click Toggle Persons button to view!</div> )
    // let myPersons = null
    if (this.state.showPersons) {
      myPersons = (
        <div>
          {
            this.state.persons.map( (person, index) => <Person key={person.id} name={person.name} age={person.age} deleted={() => this.deletePersonHandler(person.id)} /> )
          }
          <hr />
          <button onClick={this.onChangeHandler} className='btn btn-success'>Change Person</button>
        </div>
      )
    }
    
    return (
      // JSX
      // In JSX if you want to write JS -- in { ... }
      <div>
        <div className="container-fluid">
          <h1 onClick={this.onParagraphClick}>Hello... Welcome to React!</h1> <br /> <br />
          <button onClick={this.togglePersonHandler} className='btn btn-info'>Toggle Persons</button>
          <hr />
        </div>

        <div className="container">
          { myPersons }
        </div>
      </div>
    )
  }
}
export default App

// import './App.css';

// function App() {
//   return (
//     <div className="App">
//         <h1>Welcome to React Application!</h1>
//     </div>
//   );
// }

// export default App;