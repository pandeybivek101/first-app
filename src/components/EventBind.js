import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
          message:'hello'
           
        }
      }
      messageHandler=()=>{
          this.setState({
              message:'hy'

          })
      }
      
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.messageHandler}>Click me</button>
            </div>
        )
    }
}

export default EventBind
