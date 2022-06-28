import './Person.css'
import { useState } from 'react'

const Person = (props) => {
    const [ personState, setPersonState ] = useState( {
        samplePersonState: 'This is a initial Person State',
        isActuallyState: false
    } )

    const divStyles = {
        border: '2px solid gray', 
        margin: '1.3em', 
        padding: '1.3em'
    }

    const changePersonStateHandler = () => {
        setPersonState({
            samplePersonState: 'This is a new Person State',
            isActuallyState: true
        })
    }

    return (
        <div style={ divStyles } className="container">
            <div style={ {display: 'flex', justifyContent: 'space-between'} }>
                <h5>The state in Person compoennt is {personState.samplePersonState} </h5>
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