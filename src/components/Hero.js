import React from 'react'

function Hero({name}) {
    if(name==='jocker'){
        throw new Error('not  HERO')
    }
    return (
        <div>
            {name}
        </div>
    )
}

export default Hero
