import React from 'react'
import TodoCard from '../Todo-Card'
import './todos.css'
import AddTodoForm from '../Add-Todo-Form'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

const Todos = (props) => {
    const data = props.data[props.title]

    return (
        <div className='todo-list-container'>
            <div className='title'>
                <h1>{props.title}</h1>
                {props.title === "Completed" ? <></>:<AddTodoForm title={props.title}/>}
            </div>

            <DragDropContext>
                <Droppable droppableId="todos">
                    {(provided) => 
                        <div className='todos' {...provided.droppableProps} ref={provided.innerRef}>
                            {data.map((item, index) => {
                                return (
                                    <Draggable key={index} draggableId={index.toString()} index={index}>
                                        {(provided) => 
                                            <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                <TodoCard cardTitle={item["title"]} description={item["description"]} deadline={item["deadline"]} type={props.title} index={index}/>
                                            </div>
                                        }
                                        
                                    </Draggable>
                                )}
                            )}
                            {provided.placeholder}
                        </div>
                    }
                </Droppable>
            </DragDropContext>
            
        </div>
    )
}

export default Todos