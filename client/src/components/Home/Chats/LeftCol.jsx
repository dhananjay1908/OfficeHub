import { TextField, collapseClasses } from '@mui/material'
import React, { useContext, useState } from 'react'
import dp from "../../../Images/Doraemon.jpg"
import { AuthContext } from '../../../Context/AuthContext'
import { db } from '../../../Firebase/firebase'
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore'
import FriendsList from './FriendsList'

const LeftCol = () => {
    const { currentUser } = useContext(AuthContext);
    const [username, setUsername] = useState("")
    const [user, setUser] = useState(null)

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
        <div className='w-[30%] bg-blue-100 flex flex-col py-4'>
            <div className="flex items-center px-5">
                <div className="dp">
                    <div className="w-12 h-12 rounded-full bg-black me-4 overflow-hidden border-blue-500 border-2">
                        <img src={currentUser.photoURL} alt="" />
                    </div>
                </div>
                <div className='flex flex-col leading-4'>
                    <span className='font-sans text-xl font-bold'>{currentUser.displayName}</span>
                    <span className='text-gray-500 font-semibold'>Raipur, Chhattisgarh</span>
                </div>
            </div>

            <form action="" className='my-4 w-full flex items-center px-5' onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    placeholder='Search Friends'
                    variant="standard"
                    value={username}
                    InputProps={{ disableUnderline: true }}
                    onChange={(e) => { setUsername(e.target.value) }}
                    sx={{ input: { color: 'black' }, background: "white", padding: "2px 20px", borderRadius: "20px" }}
                />
            </form>

            <div className="friendList hideScroll overflow-scroll">

                {user && <div className="flex items-center hover:bg-blue-200 px-5 py-3 hover:cursor-pointer" onClick={handleSelect}>
                    <div className="dp">
                        <div className="w-10 h-10 rounded-full bg-black me-4"></div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <span className='font-sans text-lg font-bold'>{user.displayName}</span>
                    </div>
                </div>}

                <FriendsList/>
            </div>

        </div>
    )
}

export default LeftCol
