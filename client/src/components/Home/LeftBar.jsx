import React, { useState } from 'react'
import { SlCalender } from "react-icons/sl"
import { RiTodoLine } from "react-icons/ri"
import { AiOutlineHome } from "react-icons/ai"
import { BsChatDots } from "react-icons/bs"
import "../../App.css"
import { useNavigate } from 'react-router-dom'


const LeftBar = () => {
    const navigate = useNavigate();

    return (
        <div className='leftPanel hideScroll bg-blue-200 lg-basis-2/12 basis-0 opacity-95 flex-col items-center' style={{ height: "100%", overflowY: "scroll" }}>
            <div className="flex justify-center items-center gap-x-2 pt-2" onClick={() => { navigate('/') }}>
                <p className='font-serif text-xl'>Home</p>
                <div className="icon w-8 h-8 text-white  rounded-full bg-blue-600 hover:bg-blue-900 flex items-center justify-center">
                    <AiOutlineHome size={16} />
                </div>
            </div>
            <div className="flex justify-center items-center gap-x-2 pt-2">
                <p className='font-serif text-xl'>Calender</p>
                <div className="icon w-8 text-white h-8 rounded-full bg-blue-600 hover:bg-blue-900 flex items-center justify-center">
                    <SlCalender size={16} />
                </div>
            </div>
            <div className="flex justify-center items-center gap-x-2 pt-2" onClick={() => { navigate('/todo') }}>
                <p className='font-serif text-xl'>To-do list</p>
                <div className="icon w-8 text-white h-8 rounded-full bg-blue-600 hover:bg-blue-900 flex items-center justify-center">
                    <RiTodoLine size={16} />
                </div>
            </div>
            <div className="flex justify-center items-center gap-x-2 pt-2" onClick={() => { navigate('/chats') }}>
                <p className='font-serif text-xl'>Messages</p>
                <div className="icon w-8 text-white h-8 rounded-full bg-blue-600 hover:bg-blue-900 flex items-center justify-center">
                    <BsChatDots size={16} />
                </div>
            </div>
        </div>
    )
}

export default LeftBar
