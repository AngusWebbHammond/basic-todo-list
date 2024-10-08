import React from 'react'
import './todo-card.css'
import { Check, X } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { moveData, removeData } from '../../features/todos/todosSlice';

const TodoCard = (props) => {
    const dispatch = useDispatch();

    const todoItemData = {
        type: props.type,
        title: props.cardTitle,
        index: props.index,
    }

    const completedData = [
        todoItemData,
        {
            type: "Completed",
            title: props.cardTitle,
            description: props.description,
            deadline: new Date().toDateString(),
        }
    ]

    return (
        <div className='todo-container'>
            <div className='title'>
                <h3>{props.cardTitle}</h3>
                {props.type === "Completed" ? <></>:
                    <div className='title-buttons'>
                        <button className='remove' type='button' onClick={() => dispatch(moveData(completedData))}><Check/></button>
                        <button className='remove' type='button' onClick={() => dispatch(removeData(todoItemData))}><X/></button>
                    </div>
                }
            </div>
            <div className='description'>
                <h4>{props.description}</h4>
                <h5>{props.deadline}</h5>
            </div>
        </div>
    )
}

export default TodoCard