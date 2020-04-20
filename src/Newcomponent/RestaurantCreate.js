import React, { Component } from 'react'
import axios from 'axios'

class RestaurantCreate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:'',
            address:'',
            Rating:'',
            email:'',
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/restaurant', this.state)
        .then(response=>{
        })
        .catch(error=>{
            
        })
    }
    
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>RestaurantCreate</h1>
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='name' 
                    placeholder='Enter name' onChange={this.handleChange}/><br/>
                    <input type='text' name='address' 
                    placeholder='Enter address' onChange={this.handleChange}/><br/>
                    <input type='number' name='Rating' placeholder='Enter rating' 
                    onChange={this.handleChange} /><br/>
                    <input type='email' name='email' placeholder='Enter Email' 
                    onChange={this.handleChange}/><br/>
                    <input type='submit' name='submit' />
                </form>
            </div>
        )
    }
}
export default RestaurantCreate
