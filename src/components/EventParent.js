import React, { Component } from 'react'
import EventChild from './EventChild'

class EventParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName:'parent'
        }
    }

    greetParent=(childname)=>{
        alert(`Hello ${this.state.parentName} from ${childname}`)
    }
    
    render() {
        return (
            <div>
                <EventChild greetParent={this.greetParent}/>
            </div>
        )
    }
}

export default EventParent
