import React, { useContext } from 'react'
import logo from "../../Images/logo.png"
import { SlCalender } from "react-icons/sl"
import { RiTodoLine } from "react-icons/ri"
import { AiOutlineHome } from "react-icons/ai"
import { BsChatDots } from "react-icons/bs"
import { CgProfile } from "react-icons/cg"
import "../../App.css"
import { AuthContext } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate();

    const { currentUser, dispatch } = useContext(AuthContext)
    const logoutHandler = e => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" })
    }

    return (
        <div className="navbar w-full sticky top-0 h-[10%] bg-blue-900 flex justify-between items-center px-8">
            <div className="flex items-center">
                <a href='/'>
                    <div className="logo flex items-center">
                        <img src={logo} alt='OfficeHub' className='h-10' />
                    </div>
                </a>
            </div>

            <div className="flex gap-2 items-center">
                <div className="flex justify-center items-center gap-x-2 pt-2" onClick={() => { navigate('/') }}>
                    <p className='text-lg text-white'>Home</p>
                    <div className="icon w-8 h-8 text-white  rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center">
                        <AiOutlineHome size={16} />
                    </div>
                </div>
                <div className="flex justify-center items-center gap-x-2 pt-2">
                    <p className='text-lg text-white'>Calender</p>
                    <div className="icon w-8 text-white h-8 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center">
                        <SlCalender size={16} />
                    </div>
                </div>
                <div className="flex justify-center items-center gap-x-2 pt-2" onClick={() => { navigate('/todo') }}>
                    <p className='text-lg text-white'>To-do list</p>
                    <div className="icon w-8 text-white h-8 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center">
                        <RiTodoLine size={16} />
                    </div>
                </div>
                <div className="flex justify-center items-center gap-x-2 pt-2" onClick={() => { navigate('/chats') }}>
                    <p className='text-lg text-white'>Messages</p>
                    <div className="icon w-8 text-white h-8 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center">
                        <BsChatDots size={16} />
                    </div>
                </div>
            </div>

            <div className="profile flex items-center gap-1">
                <div className="icon w-8 text-white h-8 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center">
                    <CgProfile size={16} />
                </div>
                <p className='font-serif text-2xl text-blue-300'>
                    {currentUser.displayName}
                </p>
                <button
                    className='ms-1 bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded-lg text-lg font-semibold text-white'
                    onClick={logoutHandler}>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Navbar
