import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../../../Context/AuthContext'
import { ChatsContext } from '../../../Context/ChatsContext';

const Messages = ({ message }) => {
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatsContext);

    const ref = useRef()

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" })
    }, [message])

    return (
        <>
            {
                message.senderId === currentUser.uid ?
                    <div ref={ref} className="flex w-full justify-end mb-2">
                        <div className='bg-blue-500 text-white rounded-xl p-2 flex max-w-[80%] break-words'>
                            {message.text}
                        </div>
                    </div> :
                    <div className="flex w-full mb-2" ref={ref}>
                        <div className='bg-blue-800 text-white rounded-xl p-2 flex max-w-[80%] break-words'>
                            {message.text}
                        </div>
                    </div>
            }
        </>

    )
}

export default Messages
