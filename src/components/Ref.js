import React, { Component } from 'react'

class Ref extends Component {
    constructor(props) {
        super(props)
        this.inputRef=React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }
    click=()=>{
        alert(this.inputRef.current.value)
    }
    
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef} />
                <button onClick={this.click}>click</button>
            </div>
        )
    }
}

export default Ref
