import React from 'react'
import HOCcounter from './HOCcounter'


export const Hovercounter = ({incCount, count}) => {
    return (
        <div>
           <h2 onMouseOver={incCount}>Hovered {count} times</h2>  
        </div>
    )
}

export default HOCcounter(Hovercounter, 10)
