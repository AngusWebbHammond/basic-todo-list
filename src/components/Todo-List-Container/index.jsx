import React from 'react'
import Todos from '../Todos'
import './todo-list-container.css'
import data from '../../assets/test-data.json';

const TodoListContainer = () => {
    const keys = Object.keys(data);

    return (
        <div className='todo-main-container'>
            {keys.map((key) =>
                <Todos key={key} title={key} data={data}/>
            )}
        </div>
  )
}

export default TodoListContainer