import React from 'react'
import TodoCard from '../Todo-Card'
import './todos.css'
import { Plus } from 'lucide-react'
import AddTodoForm from '../Add-Todo-Form'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';

const Todos = (props) => {
    const data = props.data[props.title]

    return (
        <div className='todo-list-container'>
            <div className='title'>
                <h1>{props.title}</h1>
                <Popup trigger=
                {<button className='add-todo'><Plus/></button>}
                modal nested>
                    {
                        close => (
                            <div className="modal">
                                <div className="content">
                                    <AddTodoForm title={props.title}/>
                                </div>
                            </div>
                        )
                    }
                </Popup>
            </div>

            {data.map((item, index) => 
                <TodoCard key={index} cardTitle={item["title"]} description={item["description"]} deadline={item["deadline"]}/>
            )}
        </div>
    )
}

export default Todos