import React, { useState } from 'react'
import signup from "../../Images/signup.jpg";
import google from "../../Images/google.svg";
import "../../App.css"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from '../../Firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const Signup = () => {
    const navigate = useNavigate();
    const [displayName, setDisplayName] = useState('');
    const [orgName, setOrgName] = useState('');
    const [orgCode, setOrgCode] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [toLoginModal, setToLoginModal] = useState(false);
    const [file, setFile] = useState();

    const signupHandler = async (e) => {
        e.preventDefault();

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const storageRef = ref(storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed',
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL,
                        })
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            orgName,
                            orgCode,
                            email,
                            photoURL: downloadURL
                        });
                    });
                });

            setToLoginModal(true)
        } catch (error) {
            alert("Signup went wrong.")
        }
    }

    return (
        <>
            {toLoginModal &&
                <div className='z-10 fixed top-0 bg-[#000000cd] h-screen w-screen flex items-center justify-center'>
                    <div className="bg-white rounded-xl p-5 flex flex-col items-center gap-3">
                        <div className="text-xl font-serif">
                            You have successfully registered to OfficeHub.
                        </div>
                        <button
                            className='bg-pink-500 hover:bg-pink-800 text-white text-lg px-4 py-2 rounded-xl'
                            onClick={() => {
                                setToLoginModal(false);
                                navigate("/login")
                            }}>Login to continue</button>
                    </div>
                </div>}
            <div className="z-0 w-screen h-screen blueGrad flex items-center justify-center">
                <div className='bg-gray-200 max-h-full rounded-3xl flex lg:w-[60%] md:w-[80%] w-[90%] p-5'>
                    <div className="w-[40%] sm:block hidden">
                        <img src={signup} className="h-full rounded-3xl" alt="" />
                    </div>
                    <div className="sm:w-[60%] w-full gap-4 sm:gap-0 flex lg:gap-2 flex-col items-center sm:pl-5">
                        <h1 className='text-4xl text-blue-900 font-serif lg:mt-5 mt-2'>Login</h1>
                        <form
                            onSubmit={signupHandler}
                            className='flex flex-col items-center mt-2 py-1 gap-2 w-full'>
                            <input
                                onChange={(e) => { setDisplayName(e.target.value) }}
                                type="text"
                                value={displayName}
                                placeholder='First Name'
                                className='p-2 w-full border rounded-xl' />
                            <input
                                onChange={(e) => { setOrgName(e.target.value) }}
                                type="text"
                                value={orgName}
                                placeholder='Organisation Name'
                                className='p-2 w-full border rounded-xl' />
                            <input
                                onChange={(e) => { setOrgCode(e.target.value) }}
                                type="text"
                                value={orgCode}
                                placeholder='Organisation Code'
                                className='p-2 w-full border rounded-xl' />
                            <input
                                type='file'
                                onChange={(e) => { setFile(e.target.files[0]) }}
                                className='p-2 w-full border rounded-xl' />
                            <input
                                onChange={(e) => { setEmail(e.target.value) }}
                                type="email"
                                value={email}
                                placeholder='Email' className=
                                'p-2 w-full border rounded-xl' />
                            <input
                                onChange={(e) => { setPassword(e.target.value) }}
                                type="password"
                                value={password}
                                placeholder='Password'
                                className='p-2 w-full border rounded-xl' />
                            <button
                                type='submit'
                                className='w-full bg-blue-500 hover:bg-blue-700 py-1 px-6 rounded-xl text-white text-xl'>
                                SignUp
                            </button>
                        </form>
                        <div className='mt-1flex justify-between items-center font-bold'>
                            <span>OR</span>
                        </div>
                        <button className='mt-2 bg-white py-1 w-full text-lg font-semibold flex gap-3 justify-center items-center'>
                            <img src={google} className="h-8" alt="" />
                            SignUp in with Google
                        </button>
                        <p className='font-semibold'>
                            Already an user of OfficeHub?
                            <a href="/login" className='text-blue-700'>
                                &nbsp;Login Here.
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
