import React, { Component } from 'react'

class Conditional extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isloggedin:true
        }
    }
    
    render() {
        const loggedin=<h1>You are logged in</h1>
        const notloggedin=<h1>please Log in</h1>
        return (
            <div>
                {this.state.isloggedin ? loggedin : notloggedin}
            </div>
        )
    }
}

export default Conditional

