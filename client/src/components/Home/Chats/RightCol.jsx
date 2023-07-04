import React from 'react'
import { GrAttachment } from "react-icons/gr"
import { TextField } from '@mui/material'
import "../../../App.css"

const RightCol = () => {
    return (
        <div className='w-[70%] bg-white h-full'>
            <div className="flex p-4 h-[70px]">
                <div className="dp">
                    <div className="w-10 h-10 rounded-full bg-black me-4"></div>
                </div>
                <div className='pt-1'>
                    <span className='font-sans text-lg font-bold'>Dhananjay Singh</span>
                </div>
            </div>

            <div
                className='overflow-scroll h-full hideScroll py-4 px-8 border-b-2 border-t-2 w-full'
                style={{ height: 'calc(100% - 140px)' }}>
                <div className="flex w-full mb-2">
                    <div className='bg-blue-800 text-white rounded-xl p-2 flex max-w-[80%] break-words'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique consequuntur consectetur aliquid necessitatibus fugit enim iste quaerat dolorum ipsum sequi.
                    </div>
                </div>
                <div className="flex w-full justify-end mb-2">
                    <div className='bg-blue-600 text-white rounded-xl p-2 flex max-w-[80%] break-words'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique consequuntur consectetur aliquid necessitatibus fugit enim iste quaerat dolorum ipsum sequi.
                    </div>
                </div>
            </div>


            <div className='px-4 py-3 flex items-center h-[70px]'>
                <form action="" className='my-4 w-full flex items-center' autoComplete='off'>
                    <TextField
                        fullWidth
                        placeholder='Type a message...'
                        variant="standard"
                        InputProps={{ disableUnderline: true }}
                        sx={{ input: { color: 'black' }, background: "#f8f8f8", padding: "10px 20px", borderRadius: "20px" }}
                    />
                    <div className='px-3 '>
                        <GrAttachment />
                    </div>
                    <button className='py-2 px-4 bg-blue-600 hover:bg-blue-800 text-lg text-white rounded-2xl'>Send</button>
                </form>
            </div>

        </div>
    )
}

export default RightCol
