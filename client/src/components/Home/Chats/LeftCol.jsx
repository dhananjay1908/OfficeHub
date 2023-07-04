import { TextField } from '@mui/material'
import React, { useContext } from 'react'
import dp from "../../../Images/Doraemon.jpg"
import { AuthContext } from '../../../Context/AuthContext'

const LeftCol = () => {
    const {currentUser} = useContext(AuthContext);
    console.log(currentUser);
    return (
        <div className='w-[30%] bg-blue-100 flex flex-col py-4'>
            <div className="flex items-center px-5">
                <div className="dp">
                    <div className="w-12 h-12 rounded-full bg-black me-4 overflow-hidden border-blue-600 border-4">
                        <img src={currentUser.photoURL} alt="" />
                    </div>
                </div>
                <div className='flex flex-col leading-4'>
                    <span className='font-sans text-xl font-bold'>{currentUser.displayName}</span>
                    <span className='text-gray-500 font-semibold'>Raipur, Chhattisgarh</span>
                </div>
            </div>

            <form action="" className='my-4 w-full flex items-center px-5'>
                <TextField
                    fullWidth
                    placeholder='Search Friends'
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                    sx={{ input: { color: 'black' }, background: "white", padding: "2px 20px", borderRadius: "20px" }}
                />
            </form>

            <div className="friendList hideScroll overflow-scroll">

                <div className="flex items-center hover:bg-blue-200 px-5 py-3">
                    <div className="dp">
                        <div className="w-10 h-10 rounded-full bg-black me-4"></div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <span className='font-sans text-lg font-bold'>Doraemon Singh</span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default LeftCol
