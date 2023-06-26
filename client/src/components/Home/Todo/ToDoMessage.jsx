import React, { useState } from 'react'
import { AiFillDelete } from "react-icons/ai"
import Checkbox from '@mui/material/Checkbox';
import {toggleTodoStatus, deleteTodoById} from "../../../api/TodosAPI"

const ToDoMessage = ({ allTodos, setAllTodos, todo }) => {
    const [done, setDone] = useState(todo.completed)
    return (
        <div className='w-full'>
            <div className="w-full rounded-md bg-white py-2 px-4 text-center mt-2 flex items-center justify-between">
                <div className='flex items-center me-4'>
                    <Checkbox
                        defaultChecked={todo.completed}
                        onChange={() => {
                            setDone((prev)=>!prev);
                            toggleTodoStatus(todo._id);
                        }} />
                    <span key={todo._id} className={`text-xl font-sans ms-2 ${done ? 'line-through' : ''}`}>
                        {todo.todo}
                    </span>
                </div>
                <button onClick={() => {
                    setAllTodos(allTodos.filter((x) => x._id !== todo._id))
                    deleteTodoById(todo._id)
                }}
                >
                    <div className="icon w-10 h-10 rounded-full bg-[#f6ecf0] hover:bg-[#cf4b4b] flex items-center justify-center">
                        <AiFillDelete size={20} />
                    </div>
                </button>
            </div>
        </div>

    )
}

export default ToDoMessage
