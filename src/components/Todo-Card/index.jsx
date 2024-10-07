import React from 'react'
import './todo-card.css'
import { Check, X } from 'lucide-react'

const TodoCard = (props) => {
  return (
    <div className='todo-container'>
        <div className='title'>
            <h3>{props.cardTitle}</h3>
            <div>
                <button className='remove'><Check/></button>
                <button className='remove'><X/></button>
            </div>
        </div>
        <div className='description'>
            <h4>{props.description}</h4>
            <h5>{props.deadline}</h5>
        </div>
    </div>
  )
}

export default TodoCard