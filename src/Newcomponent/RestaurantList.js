import React, { Component, Fragment } from 'react'
import axios from 'axios'
import {Table} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

class RestaurantList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             lists:[]
        }
    }
    
    componentDidMount(){
       this.getdata();
    }

    getdata=()=>{
        axios.get('http://localhost:3000/restaurant')
       .then(response=>{
           this.setState({
               lists:response.data
           })
       })
       .catch(error=>{

      })
    }
    
    handleDelete=(id)=>{
        axios.delete(`http://localhost:3000/restaurant/${id}`)
        .then(response=>{
            this.getdata();
        })
        .catch(error=>{

        })

    }

    render() {
        return(
            <div>
                <h1>Restruant List</h1>
            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Rating</th>
                    <th>EMail</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
            {
            this.state.lists.map(list=>(
            <tr key={list.id}> 
            <td>{list.id}</td>
            <td>{list.name}</td>
            <td>{list.address}</td>
            <td>{list.Rating}</td>
            <td>{list.email}</td>
            <td>
               <NavLink to={'update/'+list.id}>Edit</NavLink>
                <button onClick={()=>this.handleDelete(list.id)}>Delete</button>
            </td>
            </tr> 
            ))
            }
            </tbody>
            </Table>
            </div>

        )
        
    }
}

export default RestaurantList
