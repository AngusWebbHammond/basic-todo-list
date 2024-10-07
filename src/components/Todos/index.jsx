import React from 'react'
import TodoCard from '../Todo-Card'
import './todos.css'
import AddTodoForm from '../Add-Todo-Form'

const Todos = (props) => {
    const data = props.data[props.title]

    return (
        <div className='todo-list-container'>
            <div className='title'>
                <h1>{props.title}</h1>
                <AddTodoForm title={props.title}/>
            </div>

            {data.map((item, index) => 
                <TodoCard key={index} cardTitle={item["title"]} description={item["description"]} deadline={item["deadline"]}/>
            )}
        </div>
    )
}

export default Todos