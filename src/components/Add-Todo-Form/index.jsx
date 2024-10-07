import { X } from 'lucide-react'
import React, { useRef } from 'react'

const AddTodoForm = (props) => {
    const inputTitleRef = useRef("");
    const inputDescriptionRef = useRef("");
    const inputDeadlineRef = useRef("");

    const updateTodoList = () => {
        if (inputTitleRef == "") {
            return;
        }
    }

    return (
        <form onSubmit={() => updateTodoList()}>
            <div className='add-todo-title-container'>
                <h3>Add to {props.title}</h3>
                {/* <button onClick={() => close()}><X/></button> */}
            </div>
            <div>
                <label htmlFor='title'>Title:</label>
                <input type="text" name='title' ref={inputTitleRef}/>
                
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input type="text" name="description" ref={inputDescriptionRef}/>
            </div>
            <div>
                <label htmlFor="deadline">Deadline:</label>
                <input type="date" name="deadline" ref={inputDeadlineRef}/>
            </div>
            <div>
                <button type='submit'>Submit Todo</button>
            </div>
        </form>
  )
}

export default AddTodoForm