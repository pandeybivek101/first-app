import React, { Component } from 'react'

class FormInput extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:null,
             age:null,
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })

    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.Addtomain(this.state)
    }
    
    render() {
        return (
            <div>
                <hr />
                <h1>Form data</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='name' onChange={this.handleChange}/><br/>
                    <input type='number' name='age' onChange={this.handleChange}/><br/>
                    <input type='submit' />
                </form>  
            </div>
        )
    }
}

export default FormInput
