import React, { useEffect, useState } from 'react'
import AddTodo from './Modal';
import ToDoMessage from './ToDoMessage';
import { getAllTodos } from "../../../api/TodosAPI"

const ToDo = () => {
    const [todo, setTodo] = useState("");
    const [allTodos, setAllTodos] = useState([]);

    const fetchAllTodos = async () => {
        const res = await getAllTodos();
        await setAllTodos(res.data);
    }
    useEffect(() => {
        fetchAllTodos()
    }, [])

    return (
        <div className="posts bg-[#889dd8] flex flex-col items-center p-4 w-full">
            <div className='lg:w-[60%] md:w-[80%] w-[90%]'>
                <AddTodo
                    todo={todo}
                    setTodo={setTodo}
                    allTodos={allTodos}
                    setAllTodos={setAllTodos}
                />
                {
                    allTodos && allTodos.map(todo => {
                        return (
                            <ToDoMessage allTodos={allTodos} setAllTodos={setAllTodos} todo={todo} key={todo._id} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ToDo
