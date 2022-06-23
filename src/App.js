import { Component } from 'react'
import Button from './components/Button'

class App extends Component {
  // JavaScript
  onClickHandler = () => {
    console.log('Button was clicked!')
  }

  onParagraphClick = () => {
    console.log('Paragraph was clicked!')
  }

  render() {
    // JSX
    return (
      <div className="container">
        <h1 onClick={this.onParagraphClick}>Hello... Welcome to React!</h1> <hr />
        <Button text='My Button' clicked={this.onClickHandler}  />
        <Button contextualClass='btn btn-danger' clicked={this.onClickHandler}  />
        <Button contextualClass='btn btn-info' clicked={this.onClickHandler}  />
        <Button clicked={this.onClickHandler} />
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