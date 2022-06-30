import { Component } from 'react';
import './Person.css'

class Person extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personStateOne: 'Person State One',
            personStateTwo: 'Person State Two'
        }
    }

    static getDerivedStateFromProps = (props, state) => {
        console.log(`[Person.js] getDerivedStateFromProps`)
        console.log(`Old Props -->`, props)
        console.log(`Old State -->`, state)
        return state
    }

    shouldComponentUpdate = (newProps, newState) => {
        console.log(`[Person.js] shouldComponentUpdate`)
        console.log(`New Props -->`, newProps)
        console.log(`New State -->`, newState)
        return true
    }

    getSnapshotBeforeUpdate = (oldProps, oldState) => {
        console.log(`[Person.js] getSnapshotBeforeUpdate`)
        return null;
    }

    componentDidUpdate = () => {
        console.log(`[Person.js] componentDidUpdate`);
    }

    divStyles = {
        border: '2px solid gray', 
        margin: '1.3em', 
        padding: '1.3em'
    }

    changePersonStateHandler = () => {
        this.setState({personStateOne: 'This is a new Person State'})
    }

    render() {
        console.log(`[Person.js] rendering...`)
        return (
            <div style={ this.divStyles } className="container">
                <div style={ {display: 'flex', justifyContent: 'space-between'} }>
                    <button onClick={this.changePersonStateHandler} className='bt btn-warning'>Change Person State</button>
                </div>
    
                <br />
    
                <p>My name is {this.props.name} and I am {this.props.age} years old!</p>
                <div className='row'>
                    <div className="col-md-8">
                        <input onChange={this.props.changed} className='input-text' type="text" placeholder="enter the name" />
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2">
                        <button onClick={this.props.deleted} className='btn btn-danger'>Delete Person</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Person;

// import { useState } from 'react'

// const Person = (props) => {
//     console.log(`[Person.js] rendering...`)

//     const [ personStateOne, setPersonStateOne ] = useState('This is a initial Person State')
//     // const [personStateTwo, setPersonStateTwo] = useState(true)

//     // Create as many useState as you want / require in the component

//     const divStyles = {
//         border: '2px solid gray', 
//         margin: '1.3em', 
//         padding: '1.3em'
//     }

//     const changePersonStateHandler = () => {
//         setPersonStateOne('This is a new Person State')
//     }

//     return (
//         <div style={ divStyles } className="container">
//             <div style={ {display: 'flex', justifyContent: 'space-between'} }>
//                 <h5>The state in Person compoennt is {personStateOne} </h5>
//                 <button onClick={changePersonStateHandler} className='bt btn-warning'>Change Person State</button>
//             </div>

//             <br />

//             <p>My name is {props.name} and I am {props.age} years old!</p>
//             <div className='row'>
//                 <div className="col-md-8">
//                     <input onChange={props.changed} className='input-text' type="text" placeholder="enter the name" />
//                 </div>
//                 <div className="col-md-2"></div>
//                 <div className="col-md-2">
//                     <button onClick={props.deleted} className='btn btn-danger'>Delete Person</button>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Person;