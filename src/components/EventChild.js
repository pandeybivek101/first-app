import React, { Component } from 'react'

class EventChild extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>this.props.greetParent('hari')}>Clickme</button>
            </div>
        )
    }
}

export default EventChild
