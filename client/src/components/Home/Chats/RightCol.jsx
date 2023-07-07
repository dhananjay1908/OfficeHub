import React, { useContext, useEffect, useState } from 'react'
import { GrAttachment } from "react-icons/gr"
import { TextField } from '@mui/material'
import "../../../App.css"
import { ChatsContext } from '../../../Context/ChatsContext'
import Messages from './Messages'
import { AuthContext } from '../../../Context/AuthContext'
import { Timestamp, arrayUnion, doc, onSnapshot, updateDoc } from 'firebase/firestore'
import { v4 as uuid } from "uuid"
import { db } from '../../../Firebase/firebase'
import { AiOutlineMenu } from "react-icons/ai"
import LeftCol from './LeftCol'
import FriendsDrawer from './FriendsDrawer'


const RightCol = () => {
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatsContext);
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState("")
    const [openDrawer, setOpenDrawer] = useState(false);

    useEffect(() => {
        const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
            doc.exists() && setMessages(doc.data().messages);
        });

        return () => {
            unsub();
        }
    }, [data.chatId])

    const handleSubmit = async e => {
        e.preventDefault();
        await updateDoc(doc(db, "chats", data.chatId), {
            messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
            })
        })

        setText("")
    }

    return (
        <div className='md:w-[70%] w-full bg-white h-full '>
            <div className="flex md:p-4 py-2 px-3 md:h-[70px] h-[60px] items-center justify-between">
                {
                    openDrawer ?
                        <div className="flex px-3">
                            <div className='pt-1'>
                                <span className='text-xl font-bold'>Chat with...</span>
                            </div>
                        </div>
                        :
                        <div className='flex'>
                            <div className="dp">
                                <div className="w-10 h-10 rounded-full bg-black me-4 overflow-hidden border-blue-500 border-2">
                                    <img src={data.user.photoURL} alt="" />
                                </div>
                            </div>
                            <div className='pt-1'>
                                <span className='font-sans text-lg font-bold'>{data.user?.displayName}</span>
                            </div>
                        </div>
                }
                {
                    openDrawer ? <></> :
                        <div className='hover:cursor-pointer p-2 rounded-lg hover:bg-slate-100 md:hidden flex' onClick={() => { setOpenDrawer(prev => !prev) }}>
                            <AiOutlineMenu size={20} />
                        </div>
                }
            </div>
            {
                openDrawer ?
                    <FriendsDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} /> :
                    <>
                        <div
                            className='overflow-scroll hideScroll py-4 md:px-8 px-4 border-b-2 border-t-2 w-full md:h-[calc(100%-140px)] h-[calc(100%-120px)]'
                        >
                            {
                                messages.map(m => (
                                    <Messages message={m} key={m.id} />
                                ))
                            }
                        </div>


                        <div className='md:px-4 px-3 md:py-3 py-auto flex items-center md:h-[70px] h-[60px]'>
                            <form action="" className='my-4 w-full flex items-center' autoComplete='off' onSubmit={handleSubmit}>
                                <TextField
                                    fullWidth
                                    placeholder='Type a message...'
                                    variant="standard"
                                    value={text}
                                    onChange={e => setText(e.target.value)}
                                    InputProps={{ disableUnderline: true }}
                                    sx={{ input: { color: 'black' }, background: "#f8f8f8", padding: "10px 20px", borderRadius: "20px" }}
                                />
                                <div className='px-3'>
                                    <GrAttachment />
                                </div>
                                <button className='py-2 md:px-4 px-3 bg-blue-600 hover:bg-blue-800 text-lg text-white rounded-2xl'>Send</button>
                            </form>
                        </div>
                    </>
            }
        </div>
    )
}

export default RightCol
