import React from 'react'
import Total from './Total'
import Part from './Part'

const Content = ({ parts }) => {
    console.log('Content component parts', parts)
    return (
        <div>
            {parts.map(part =>
                <Part key={part.id} part={part} />)}
            <Total parts={parts} />
        </div>
    )
}

export default Content