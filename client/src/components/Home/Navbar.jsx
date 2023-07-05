import React, { useContext, useState, useEffect } from 'react'
import logo from "../../Images/logo.png"
import { SlCalender } from "react-icons/sl"
import { RiTodoLine } from "react-icons/ri"
import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineMenu } from "react-icons/ai"
import { BsChatDots } from "react-icons/bs"
import { CgProfile } from "react-icons/cg"
import "../../App.css"
import { AuthContext } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate();
    const [openDrawer, setOpenDrawer] = useState(false);
    const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 768);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    const { currentUser, dispatch } = useContext(AuthContext)
    const logoutHandler = e => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" })
    }

    return (
        // <>{
        //     isDesktop ?
        //         <div className="navbar w-full sticky top-0 h-[10%] bg-blue-900 flex justify-between items-center px-8">
        //             <div className="flex items-center">
        //                 <a href='/'>
        //                     <div className="logo flex items-center">
        //                         <img src={logo} alt='OfficeHub' className='h-10' />
        //                     </div>
        //                 </a>
        //             </div>

        //             <div className="flex gap-2 items-center">
        //                 <div className="flex justify-center items-center gap-x-2 pt-2" onClick={() => { navigate('/') }}>
        //                     <p className='text-lg text-white'>Home</p>
        //                     <div className="icon w-8 h-8 text-white  rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center">
        //                         <AiOutlineHome size={16} />
        //                     </div>
        //                 </div>
        //                 <div className="flex justify-center items-center gap-x-2 pt-2">
        //                     <p className='text-lg text-white'>Calender</p>
        //                     <div className="icon w-8 text-white h-8 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center">
        //                         <SlCalender size={16} />
        //                     </div>
        //                 </div>
        //                 <div className="flex justify-center items-center gap-x-2 pt-2" onClick={() => { navigate('/todo') }}>
        //                     <p className='text-lg text-white'>To-do list</p>
        //                     <div className="icon w-8 text-white h-8 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center">
        //                         <RiTodoLine size={16} />
        //                     </div>
        //                 </div>
        //                 <div className="flex justify-center items-center gap-x-2 pt-2" onClick={() => { navigate('/chats') }}>
        //                     <p className='text-lg text-white'>Messages</p>
        //                     <div className="icon w-8 text-white h-8 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center">
        //                         <BsChatDots size={16} />
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="profile flex items-center gap-1">
        //                 <div className="icon w-8 text-white h-8 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center">
        //                     <CgProfile size={16} />
        //                 </div>
        //                 <p className='font-serif text-2xl text-blue-300'>
        //                     {currentUser.displayName}
        //                 </p>
        //                 <button
        //                     className='ms-1 bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded-lg text-lg font-semibold text-white'
        //                     onClick={logoutHandler}>
        //                     Logout
        //                 </button>
        //             </div>
        //         </div> :
        <div className="navbar w-full sticky top-0 h-[10%] bg-blue-900 flex justify-between items-center px-8 z-10">
            <div className="flex items-center">
                <a href='/'>
                    <div className="logo flex items-center">
                        <img src={logo} alt='OfficeHub' className='h-10' />
                    </div>
                </a>
            </div>
            <div className='bg-blue-600 hover:bg-blue-500 p-2 hover:cursor-pointer rounded-md relative' onClick={() => { setOpenDrawer(prev => !prev) }}>
                <AiOutlineMenu size={20} />
                {
                    openDrawer ?
                        <div className='absolute right-0 top-9 bg-blue-600 px-10 py-1 rounded-xl flex flex-col items-start'>
                            <div className="flex justify-center items-center gap-x-2 py-1 text-white" onClick={()=>{navigate('/profile')}}>
                                <div className="icon w-8 h-8 text-white rounded-full bg-blue-600 flex items-center justify-center">
                                    <CgProfile size={20} />
                                </div>
                                <p className='text-lg text-white'>
                                    {currentUser.displayName}
                                </p>
                            </div>

                            <hr style={{ border: "1px solid white" }} className='w-full' />

                            <div className="flex justify-center items-center gap-x-2 py-1" onClick={() => { navigate('/') }}>
                                <div className="icon w-8 h-8 text-white rounded-full bg-blue-600 flex items-center justify-center">
                                    <AiOutlineHome size={16} />
                                </div>
                                <p className='text-lg text-white'>Home</p>
                            </div>
                            <hr style={{ border: "1px solid white" }} className='w-full' />
                            <div className="flex justify-center items-center gap-x-2 py-1" onClick={() => { navigate('/todo') }}>
                                <div className="icon w-8 text-white h-8 rounded-full bg-blue-600 flex items-center justify-center">
                                    <RiTodoLine size={16} />
                                </div>
                                <p className='text-lg text-white'>To-do list</p>
                            </div>
                            <hr style={{ border: "1px solid white" }} className='w-full' />
                            <div className="flex justify-center items-center gap-x-2 py-1" onClick={() => { navigate('/chats') }}>
                                <div className="icon w-8 text-white h-8 rounded-full bg-blue-600 flex items-center justify-center">
                                    <BsChatDots size={16} />
                                </div>
                                <p className='text-lg text-white'>Messages</p>
                            </div>
                            <hr style={{ border: "1px solid white" }} className='w-full' />
                            <button
                                className='my-2 mx-auto bg-green-500 hover:bg-green-600 px-2 py-1 rounded-lg text-lg font-semibold text-white'
                                onClick={logoutHandler}>
                                Logout
                            </button>
                        </div> :
                        <></>

                }
            </div>
        </div>
        // }
        // </>

    )
}

export default Navbar
