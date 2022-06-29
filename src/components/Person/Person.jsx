import './Person.css'
import { useState } from 'react'

const Person = (props) => {
    console.log(`[Person.js] rendering...`)

    const [ personStateOne, setPersonStateOne ] = useState('This is a initial Person State')
    // const [personStateTwo, setPersonStateTwo] = useState(true)

    // Create as many useState as you want / require in the component

    const divStyles = {
        border: '2px solid gray', 
        margin: '1.3em', 
        padding: '1.3em'
    }

    const changePersonStateHandler = () => {
        setPersonStateOne('This is a new Person State')
    }

    return (
        <div style={ divStyles } className="container">
            <div style={ {display: 'flex', justifyContent: 'space-between'} }>
                <h5>The state in Person compoennt is {personStateOne} </h5>
                <button onClick={changePersonStateHandler} className='bt btn-warning'>Change Person State</button>
            </div>

            <br />

            <p>My name is {props.name} and I am {props.age} years old!</p>
            <div className='row'>
                <div className="col-md-8">
                    <input onChange={props.changed} className='input-text' type="text" placeholder="enter the name" />
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-2">
                    <button onClick={props.deleted} className='btn btn-danger'>Delete Person</button>
                </div>
            </div>
        </div>
    )
}
export default Person;