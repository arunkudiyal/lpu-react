import { Component } from 'react'
import Person from './components/Person/Person'

class App extends Component {
  // State --> A way to create & manage your own data within the component
  // State are nothing but a normal JS Object
  state = {
    persons: [
      {name: 'Johnathan', age: 25},
      {name: 'Max', age: 23},
      {name: 'Daniel', age: 29},
      {name: 'Ted', age: 24}
    ]
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

  render() {
    // JSX
    return (
      <div className="container">
        <h1 onClick={this.onParagraphClick}>Hello... Welcome to React!</h1> <hr />
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={ (event) => {this.onNameChangedHandler(event)} } />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />

        <hr />

        <button onClick={this.onChangeHandler} className='btn btn-danger'>Change Person</button>
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