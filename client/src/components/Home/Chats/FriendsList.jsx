import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../Context/AuthContext'
import { db } from '../../../Firebase/firebase'
import { doc, onSnapshot } from 'firebase/firestore';
import { ChatsContext } from '../../../Context/ChatsContext';
const FriendsList = () => {
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatsContext);

  const [chats, setChats] = useState([]);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());

        return () => {
          unsub();
        }
      });
    }

    currentUser.uid && getChats()
  }, [currentUser.uid])

  const handleSelect = async (u) => {
    dispatch({ type: "CHANGE_USER", payload: u })
  }
  return (
    <>
      {
        Object.entries(chats)?.map(chat => (
          <div className="flex items-center hover:bg-blue-200 lg:px-5 px-3 py-3 px hover:cursor-pointer" key={chat[0]} onClick={() => handleSelect(chat[1].userinfo)}>
            <div className="dp">
              <div className="w-10 h-10 rounded-full bg-black me-4 overflow-hidden border-blue-500 border-2">
                <img src={chat[1].userinfo.photoURL} alt="" />
              </div>
            </div>
            <div className='flex flex-col justify-center'>
              <span className='font-sans text-lg font-bold'>{chat[1].userinfo.displayName}</span>
            </div>
          </div>
        ))
      }
    </>

  )
}

export default FriendsList
