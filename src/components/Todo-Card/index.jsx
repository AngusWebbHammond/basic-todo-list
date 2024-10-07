import React from 'react'
import './todo-card.css'

const TodoCard = (props) => {
  return (
    <div>
        <div className='title'>
            <h3>{props.cardTitle}</h3>
        </div>
        <div className='description'>
            <h4>{props.description}</h4>
            <h5>{props.deadline}</h5>
        </div>
        
    </div>
  )
}

export default TodoCard