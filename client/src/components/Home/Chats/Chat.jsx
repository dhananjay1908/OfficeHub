import React from 'react'

import LeftCol from './LeftCol'
import RightCol from './RightCol'

const Chat = () => {
  return (
    <div className='bg-[#889dd8] py-5 flex items-center justify-center w-full'>
      <div className='xl:w-[80%] lg:w-[86%] w-[94%] h-full flex items-center justify-center rounded-xl overflow-hidden'>
        <div className="rounded-xl w-full h-full flex overflow-hidden justify-center">
          <LeftCol/>
          <RightCol/>
        </div>
      </div>
    </div>
  )
}

export default Chat
