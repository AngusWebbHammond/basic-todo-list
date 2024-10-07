import React from 'react'
import TodoCard from '../Todo-Card'
import './todos.css'

const Todos = (props) => {
  return (
    <div className='todo-container'>
        <h1>{props.title}</h1>
        <TodoCard cardTitle='Clean Room'/>
        <TodoCard cardTitle='Do Washing Up' description='Test1' deadline='10/10/2024'/>
        <TodoCard cardTitle='Take Dog for Walk'/>
    </div>
  )
}

export default Todos