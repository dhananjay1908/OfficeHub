import { TextField } from '@mui/material'
import React from 'react'
import { GrAttachment } from "react-icons/gr"

const Chat = () => {
  return (
    <div className='basis-10/12 bg-[#889dd8] py-5 flex items-center justify-center'>
      <div className="w-[90%] rounded-xl h-full flex overflow-hidden">
        <div className='w-[30%] bg-blue-100 p-5 flex flex-col'>
          <div className="flex items-center">
            <div className="dp">
              <div className="w-10 h-10 rounded-full bg-black me-4">
              </div>
            </div>
            <div className='flex flex-col'>
              <span className='font-sans text-xl font-bold'>Dhananjay Singh</span>
              <span className='text-gray-600'>Raipur, Chhattisgarh</span>
            </div>
          </div>

          <form action="" className='my-4 w-full flex items-center'>
            <TextField
              fullWidth
              placeholder='Search Friends'
              variant="standard"
              InputProps={{ disableUnderline: true }}
              sx={{ input: { color: 'black' }, background: "white", padding: "5px 10px", borderRadius: "20px" }}
            />
          </form>

          <div className="friendList hideScroll overflow-scroll">
            <div className="flex items-center mb-2">
              <div className="dp">
                <div className="w-8 h-8 rounded-full bg-black me-4"></div>
              </div>
              <div className='flex flex-col'>
                <span className='font-sans text-lg font-bold'>Dhananjay Singh</span>
                <span className='text-gray-600'>Raipur, Chhattisgarh</span>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <div className="dp">
                <div className="w-8 h-8 rounded-full bg-black me-4"></div>
              </div>
              <div className='flex flex-col'>
                <span className='font-sans text-lg font-bold'>Dhananjay Singh</span>
                <span className='text-gray-600'>Raipur, Chhattisgarh</span>
              </div>
            </div>
          </div>

        </div>
        <div className='w-[70%] bg-white h-full'>
          <div className=" h-[15%] flex items-center p-4">
            <div className="dp">
              <div className="w-8 h-8 rounded-full bg-black me-4"></div>
            </div>
            <div className='flex flex-col'>
              <span className='font-sans text-lg font-bold'>Dhananjay Singh</span>
              <span className='text-gray-600'>Raipur, Chhattisgarh</span>
            </div>
          </div>

          <div className='w-full relative h-[75%]'>
            <div className='overflow-scroll h-full hideScroll py-4 px-8 border-b-2 border-t-2 z-10'>
              <div
                className='p-2 relative rounded-xl z-0 max-w-[70%] my-1 me-[20%] bg-blue-600 text-white font-medium font-sans break-words'>

                hello

              </div>
              <div
                className='p-2 relative rounded-xl z-0 max-w-[70%] my-1 me-[20%] bg-blue-600 text-white font-medium font-sans break-words'>

                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla eaque quos error ipsa ut dolor minima dicta nesciunt magni enim?

              </div>
              <div
                className='p-2 relative rounded-xl z-0 max-w-[70%] my-1 me-[20%] bg-blue-600 text-white font-medium font-sans break-words'>

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quos commodi sit dicta nisi minus.

              </div>
              <div
                className='p-2 relative rounded-xl z-0 max-w-[70%] my-1 bg-blue-600 text-white font-medium font-sans break-words'>

                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis non, incidunt recusandae ducimus commodi porro debitis corporis sunt iure quisquam neque amet suscipit a officia, architecto quia libero dignissimos ratione ipsum officiis, sapiente vitae facere quis. Incidunt, asperiores beatae eveniet nostrum ex, recusandae omnis, vitae harum nobis necessitatibus maiores adipisci?

              </div>
            </div>
          </div>


          <div className='h-[10%] px-4 flex items-center'>
          <form action="" className='my-4 w-full flex items-center'>
            <TextField
              fullWidth
              placeholder='Type a message...'
              variant="standard"
              InputProps={{ disableUnderline: true }}
              sx={{ input: { color: 'black' }, background: "#f8f8f8", padding: "5px 10px", borderRadius: "20px" }}
            />
            <div className='px-3 '>
              <GrAttachment/>
            </div>
            <button className='py-2 px-4 bg-blue-600 text-lg text-white rounded-xl'>Send</button>
          </form>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Chat
