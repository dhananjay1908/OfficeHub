import React, { useContext } from 'react'
import logo from "../../Images/logo.png"
import { FaPlus } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"
import "../../App.css"
import { AuthContext } from '../../Context/AuthContext'


const Navbar = () => {
    const { currentUser, dispatch } = useContext(AuthContext)
    const logoutHandler = e => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" })
    }

    return (
        <div className="navbar w-full sticky top-0 h-[70px] bg-blue-900 flex justify-between items-center px-8">
            <div className="flex items-center">
                <a href='/'>
                    <div className="logo flex items-center">
                        <img src={logo} alt='OfficeHub' className='h-10' />
                    </div>
                </a>
            </div>

            <div className="profile flex items-center gap-1">
                <CgProfile color="#75b7f9" size={20} />
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
