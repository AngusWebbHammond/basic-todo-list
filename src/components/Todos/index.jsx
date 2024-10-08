import React from 'react'
import TodoCard from '../Todo-Card'
import './todos.css'
import AddTodoForm from '../Add-Todo-Form'
import { useDispatch } from 'react-redux'

const Todos = (props) => {
    const dispatch = useDispatch()

    const data = props.data[props.title]

    function handleOnDrag(e, cardType) {
        e.dataTransfer.setData("WidgetType", cardType);
    }

    function handleOnDrop(e) {
        const cardType = e.dataTransfer.getData("WidgetType");
        console.log(cardType);
        console.log(props.title);
        console.log(cardType)
    }
    
    function handleDragOver(e) {
        e.preventDefault();
    }

    return (
        <div className='todo-list-container'>
            <div className='title'>
                <h1>{props.title}</h1>
                {props.title === "Completed" ? <></>:<AddTodoForm title={props.title}/>}
            </div>
            <div onDrop={handleOnDrop} onDragOver={handleDragOver}>
                {data.map((item, index) => 
                    <TodoCard key={index} cardTitle={item["title"]} description={item["description"]} deadline={item["deadline"]} type={props.title} index={index} onDragStart={handleOnDrag}/>
                )}
            </div>
        </div>
    )
}

export default Todos