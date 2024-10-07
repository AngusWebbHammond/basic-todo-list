import React from 'react'
import Todos from '../Todos'
import './todo-list-container.css'

const TodoListContainer = () => {
  return (
    <div className='todo-main-container'>
        <Todos title='Urgent'/>
        <Todos title='Important'/>
        <Todos title='Upcoming'/>
    </div>
  )
}

export default TodoListContainer