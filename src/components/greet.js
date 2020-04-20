import React from 'react'


const Greet=({name, address})=>{
    function clickHandler(){
        alert('clicked')
    }
return(
    <div>
        <h1>hELLOW {name} from {address}</h1>
        <button onClick={clickHandler}>click</button>
    </div>
)

}

export default Greet;
