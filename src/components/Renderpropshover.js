import React from 'react'

const Renderpropshover = ({count, incCount}) => {
    return (
        <div>
            <h2 onMouseOver={incCount}>Hovered {count} times</h2> 
        </div>
    )
}

export default Renderpropshover

