import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../Context/AuthContext'
import { db } from '../../../Firebase/firebase'
import { doc, onSnapshot } from 'firebase/firestore';
const FriendsList = () => {
  const { currentUser } = useContext(AuthContext);
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
  return (
    <>
      {
        Object.entries(chats)?.map(chat => (
          <div className="flex items-center hover:bg-blue-200 px-5 py-3 hover:cursor-pointer" key={chat[0]}>
            <div className="dp">
              <div className="w-10 h-10 rounded-full bg-black me-4"></div>
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
