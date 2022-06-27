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
            <div className='row'>
                <div className="col-md-8">
                    <input onChange={props.changed} className='input-text' type="text" placeholder="enter the name" />
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-2">
                    <button className='btn btn-danger'>Delete Person</button>
                </div>
            </div>
        </div>
    )
}
export default Person;