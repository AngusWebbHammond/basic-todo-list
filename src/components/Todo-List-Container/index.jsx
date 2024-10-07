import React from 'react'
import Todos from '../Todos'
import './todo-list-container.css'
import { useSelector } from 'react-redux';


const TodoListContainer = () => {
    const todoData = useSelector((state) => state.todos.data)
    const keys = Object.keys(todoData);
    
    return (
        <div className='todo-main-container'>
            {keys.map((key) =>
                <Todos key={key} title={key} data={todoData}/>
            )}
        </div>
  )
}

export default TodoListContainer