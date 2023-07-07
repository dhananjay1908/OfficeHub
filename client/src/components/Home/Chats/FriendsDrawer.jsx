import { TextField, collapseClasses } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import dp from "../../../Images/Doraemon.jpg"
import { AuthContext } from '../../../Context/AuthContext'
import { db } from '../../../Firebase/firebase'
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where, onSnapshot } from 'firebase/firestore'
import FriendsList from './FriendsList'
import { ChatsContext } from '../../../Context/ChatsContext'

const FriendsDrawer = ({openDrawer, setOpenDrawer}) => {
    const { currentUser } = useContext(AuthContext);
    const [username, setUsername] = useState("")
    const [user, setUser] = useState(null)
  const { dispatch } = useContext(ChatsContext);

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

  const handleSetUser = async (u) => {
    dispatch({ type: "CHANGE_USER", payload: u })
    setOpenDrawer(prev=>!prev)
  }

  const [chats, setChats] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const q = query(collection(db, "users"), where("displayName", "==", username))
        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data());
            });
        } catch (error) {
            console.log(error);
        }
    }

    const handleSelect = async (e) => {
        const combinedId = currentUser.uid > user.uid ? user.uid + currentUser.uid : currentUser.uid + user.uid;
        try {
            const res = await getDoc(doc(db, "chats", combinedId))

            if (!res.exists()) {
                await setDoc(doc(db, "chats", combinedId), { messages: [] })

                await updateDoc(doc(db, "userChats", currentUser.uid), {
                    [combinedId+".userinfo"]: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL
                    },
                    [combinedId+".date"]: serverTimestamp()
                });
                await updateDoc(doc(db, "userChats", user.uid), {
                    [combinedId+".userinfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL
                    },
                    [combinedId+".date"]: serverTimestamp()
                });
            }

            setUser(null)
            setUsername("")
        } catch (error) {

        }
    }
    return (
        <div className='w-full bg-gray-100 sm:flex sm:flex-col py-2 h-full'>
            <form action="" className='my-4 w-full flex items-center px-3' onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    placeholder='Search Friends'
                    variant="standard"
                    value={username}
                    InputProps={{ disableUnderline: true }}
                    onChange={(e) => { setUsername(e.target.value) }}
                    sx={{ input: { color: 'black' }, background: "#fff", padding: "5px 20px", borderRadius: "20px" }}
                />
            </form>

            <div className="friendList hideScroll overflow-scroll">

                {user && <div className="flex items-center hover:bg-blue-200 px-3 py-3 hover:cursor-pointer" onClick={handleSelect}>
                    <div className="dp">
                        <div className="w-10 h-10 rounded-full bg-black me-4"></div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <span className='font-sans text-lg font-bold'>{user.displayName}</span>
                    </div>
                </div>}
        
                <>
      {
        Object.entries(chats)?.map(chat => (
          <div className="flex items-center hover:bg-gray-200 lg:px-5 px-3 py-3 px hover:cursor-pointer" key={chat[0]} onClick={() => handleSetUser(chat[1].userinfo)}>
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
            </div>

        </div>
    )
}

export default FriendsDrawer
