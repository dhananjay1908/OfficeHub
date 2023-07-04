import React from 'react'

import LeftCol from './LeftCol'
import RightCol from './RightCol'

const Chat = () => {
  return (
    <div className='bg-[#889dd8] py-5 flex items-center justify-center w-full'>
      <div className='lg:w-[75%] w-[96%] h-full flex items-center justify-center rounded-xl overflow-hidden'>
        <div className="rounded-xl w-full h-full flex overflow-hidden">
          <LeftCol/>
          <RightCol/>
        </div>
      </div>
    </div>
  )
}

export default Chat
