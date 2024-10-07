import React from 'react'
import Todos from '../Todos'
import './todo-list-container.css'
import data from '../../assets/test-data.json';

const TodoListContainer = () => {
  return (
    <div className='todo-main-container'>
        <Todos title='Urgent' data={data}/>
        <Todos title='Important' data={data}/>
        <Todos title='Upcoming' data={data}/>
    </div>
  )
}

export default TodoListContainer