import React from 'react'
import { RiTodoLine } from "react-icons/ri"
import { BsFillCameraFill } from "react-icons/bs"
import "../../App.css"
import { TextField } from '@mui/material'

const CreatePost = () => {
    return (
        <div className='createPost flex flex-col w-[80%] bg-white p-6 rounded-md'>
            <div className="flex gap-4 items-center pb-8">
                <div>
                    <div className="w-12 h-12 rounded-full bg-[#f6ecf0] flex items-center justify-center">
                        <RiTodoLine size={16} />
                    </div>
                </div>
                <TextField
                    id="standard-multiline-flexible"
                    fullWidth
                    multiline
                    maxRows={4}
                    placeholder='What are you thinking?'
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                />
            </div>
            <div className="flex justify-between">
                <button>
                    <div className="icon w-8 h-8 rounded-full bg-[#f6ecf0] hover:bg-[#C0516F] flex items-center justify-center">
                        <BsFillCameraFill size={16} />
                    </div>
                </button>
                <button className='border-1 bg-pink-600 px-4 text-white font-serif hover:bg-pink-700 rounded-md'>Share</button>
            </div>
        </div>
    )
}

export default CreatePost
