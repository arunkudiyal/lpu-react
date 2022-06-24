import './Person.css'

const Person = (props) => {
    const divStyles = {
        border: '2px solid gray', 
        margin: '1.3em', 
        padding: '1.3em'
    }

    return (
        <div style={ divStyles } className="container">
            <p>My name is {props.name} and I am {props.age} years old!</p>
            <input onChange={props.changed} className='input-text' type="text" placeholder="enter the name" />
        </div>
    )
}
export default Person;