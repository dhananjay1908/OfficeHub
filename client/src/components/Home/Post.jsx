import React, { useState } from 'react'
import { AiFillHeart } from "react-icons/ai"
import { FaComment } from "react-icons/fa"
import { BiCommentDetail } from "react-icons/bi"
import { TextField } from '@mui/material'

const Comment = () => {
    return (
        <div className="flex gap-2 mt-3">
            <div className='flex items-center'>
                <div className="w-8 h-8 rounded-full bg-black"></div>
            </div>
            <div className='text-sm font-bold whitespace-nowrap'>
                Mahatama Gandhu
            </div>
            <div className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quisquam unde fugiat atque accusamus dolores consequuntur porro. Impedit, dolorem saepe?</div>
        </div>
    )
}

const Post = () => {
    const [liked, setLiked] = useState(false);
    const [comment, setComment] = useState(false);

    return (
        <div className='flex flex-col w-[80%] bg-white p-4 rounded-md mt-8'>
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
            <div className="desc text-sm mt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium maiores, expedita numquam, assumenda mollitia officiis non a, impedit soluta ab rerum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste quaerat corporis velit! Suscipit expedita modi deleniti, doloribus veritatis explicabo quasi.
            </div>
            <div className="tags flex gap-4 my-4">
                <div className='bg-[#c1c1c1] rounded-xl px-2'>
                    HTML
                </div>
            </div>
            <hr />
            <div className="flex my-2 gap-3">
                <div className='cursor-pointer flex gap-1 font-bold items-center text-[#979696]'>
                    <AiFillHeart onClick={() => { setLiked(!liked) }} color={`${liked ? 'red' : "#c1c1c1"}`} size={30} />
                    <span>Like</span>
                </div>
                <div className='cursor-pointer flex gap-1 font-bold items-center text-[#979696]'>
                    <FaComment onClick={() => { setComment(!comment) }} color={`${comment ? 'black' : "#c1c1c1"}`} size={30} />
                    <span>Comment</span>
                </div>
            </div>
            {comment &&
                <>
                    <div className="w-full flex gap-2 items-center border-2 p-2 rounded-lg mt-2">
                        <BiCommentDetail color="black" size={30} />
                        <TextField
                            id="standard-multiline-flexible"
                            fullWidth
                            multiline
                            maxRows={2}
                            placeholder='Add a comment...'
                            variant="standard"
                            InputProps={{ disableUnderline: true }}
                        />
                    </div>
                    <Comment />
                </>
            }
        </div>
    )
}

export default Post
