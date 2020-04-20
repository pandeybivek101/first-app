import {USER} from './constant'
import axios from 'axios'

export const helloRedux=()=>(dispatch:any)=>{
    axios.get('http://127.0.0.1:8000/api/product/')
        .then(response=>{
        console.log(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
}