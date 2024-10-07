import React from 'react'
import TodoCard from '../Todo-Card'
import './todos.css'
import { Plus } from 'lucide-react'

const Todos = (props) => {
  return (
    <div className='todo-container'>
        <div className='title'>
            <h1>{props.title}</h1>
            <button className='add-todo'><Plus/></button>
        </div>
        
        <TodoCard cardTitle='Clean Room'/>
        <TodoCard cardTitle='Do Washing Up' description='Test1' deadline='10/10/2024'/>
        <TodoCard cardTitle='Take Dog for Walk'/>
    </div>
  )
}

export default Todos