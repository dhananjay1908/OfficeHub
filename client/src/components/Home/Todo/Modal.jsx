import { Button, TextField } from '@mui/material'
import React from 'react'
import { addNewTodo } from "../../../api/TodosAPI"

const AddTodo = ({ todo, setTodo, allTodos, setAllTodos }) => {
    const changeHandler = e => {
        setTodo(e.target.value)
    }

    const submitHandler = e => {
        e.preventDefault()
        addNewTodo(todo)
        setTodo("")
        setAllTodos([{ todo }, ...allTodos])
    }

    return (
        <div className="w-full bg-blue-800 rounded-md p-4 mb-3">
            <div className="w-[100%] h-[100%]">
                <form autocomplete="off" className='w-[100%] h-[100%] flex items-center' onSubmit={submitHandler}>
                    <TextField
                        value={todo}
                        fullWidth
                        placeholder='What are you thinking?'
                        variant="standard"
                        InputProps={{ disableUnderline: true }}
                        onChange={changeHandler}
                        sx={{ input: { color: 'white' } }}
                    />
                    <Button variant='contained' type='submit' >Create</Button>
                </form>
            </div>
        </div>
    )
}

export default AddTodo
