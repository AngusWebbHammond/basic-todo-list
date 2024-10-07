import { X } from 'lucide-react'
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { addToData } from '../../features/todos/todosSlice';
import { Plus } from 'lucide-react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';

const AddTodoForm = (props) => {
    const inputTitleRef = useRef("");
    const inputDescriptionRef = useRef("");
    const inputDeadlineRef = useRef("");

    const dispatch = useDispatch();

    const updateTodoList = () => {
        if (inputTitleRef == "") {
            return;
        }
        dispatch(addToData({
                type: props.title,
                title: inputTitleRef.current.value,
                description: inputDescriptionRef.current.value,
                deadline: inputDeadlineRef.current.value,
        }))
    }

    return (
        <Popup trigger=
            {<button className='add-todo'><Plus/></button>}
            modal nested>
                {
                    close => (
                        <div className="modal">
                            <div className="content">
                                <div className='add-todo-title-container'>
                                    <h3>Add to {props.title}</h3>
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
                                    <button type='button' onClick={() => {
                                        updateTodoList();
                                        close();
                                    }}>Submit Todo</button>
                                </div>
                            </div>
                        </div>
                    )
                }
        </Popup>
    )
}

export default AddTodoForm