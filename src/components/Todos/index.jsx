import React from 'react'
import TodoCard from '../Todo-Card'
import './todos.css'
import { Plus } from 'lucide-react'

const Todos = (props) => {
    const data = props.data[props.title]
    console.log(data)
    

    return (
        <div className='todo-container'>
            <div className='title'>
                <h1>{props.title}</h1>
                <button className='add-todo'><Plus/></button>
            </div>

            {data.map((item, index) => 
                <TodoCard key={index} cardTitle={item["title"]} description={item["description"]} deadline={item["deadline"]}/>
            )}
        </div>
    )
}

export default Todos