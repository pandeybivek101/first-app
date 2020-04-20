import React, { Component } from 'react'
import axios from 'axios'

class RestaurantUpdate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:'',
            address:'',
            Rating:'',
            email:'',

        }
    }

    componentDidMount(){
        axios.get(`http://localhost:3000/restaurant/${this.props.match.params.id}`)
        .then(response=>{
            this.setState({
                name:response.data.name,
                address:response.data.address,
                Rating:response.data.Rating,
                email:response.data.email

            })
        })
        .catch(error=>{
 
        })
     }


    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleUpdate=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:3000/restaurant/${this.props.match.params.id}`, this.state)
        .then(response=>{
            alert('successfully updated')
        })
        .catch(error=>{
 
        })
    }

    render() {
        return (
            <div>
                <h1>RestaurantCreate</h1>
                <hr/>
                <form onSubmit={this.handleUpdate}>
                    <input type='text' name='name' 
                    placeholder='Enter name' onChange={this.handleChange} value={this.state.name}/><br/>
                    <input type='text' name='address' 
                    placeholder='Enter address' onChange={this.handleChange} value={this.state.address}/><br/>
                    <input type='number' name='Rating' placeholder='Enter rating' 
                    onChange={this.handleChange} value={this.state.Rating}/><br/>
                    <input type='email' name='email' placeholder='Enter Email' 
                    onChange={this.handleChange} value={this.state.email}/><br/>
                    <input type='submit' name='submit' />
                </form>
            </div>
        )
    }
}

export default RestaurantUpdate
