import { Component } from 'react'

class Button extends Component {
    render(props) {
        // JSX -> HTML looking code wrapped in ()
        return(
            <button onClick={this.props.clicked} className={this.props.contextualClass}> {this.props.text} </button>
        )
    }
}

// defaultProps
// ComponentName.defaultProps = { propProperty: propValue }
Button.defaultProps = {
    contextualClass: 'btn btn-success',
    text: 'Click Me'
}

export default Button