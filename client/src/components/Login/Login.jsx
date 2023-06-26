import React, { useContext, useState } from 'react'
import office from "../../Images/office.jpg";
import google from "../../Images/google.svg";
import "../../App.css"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);

    const {dispatch} = useContext(AuthContext);

    const loginHandler = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch({type:"LOGIN", payload: user})
                navigate("/")
            })
            .catch((error) => {
                setLoginError(true)
                alert("Wrong username or password.")
                const errorCode = error.code;
                const errorMessage = error.message;
            });

        setEmail('');
        setPassword('');
    }

    return (
        <div className="w-screen h-screen blueGrad flex items-center justify-center">
            <div className='bg-gray-200 max-h-full rounded-3xl flex lg:w-[60%] md:w-[80%] w-[90%] p-5'>
                <div className="sm:w-[50%] w-full gap-4 sm:gap-0 flex lg:gap-2 flex-col items-center sm:pr-5">
                    <h1 className='text-4xl text-blue-900 font-serif lg:mt-5 mt-2'>Login</h1>

                    {loginError && <p className='text-red-600'>Wrong username or password</p>}
                    <form
                        onSubmit={loginHandler}
                        className='flex flex-col items-center mt-2 py-1 gap-4 w-full'>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            placeholder='Email'
                            className='p-2 w-full border rounded-xl' />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                            placeholder='Password'
                            className='p-2 w-full border rounded-xl' />
                        <button type='submit' className='w-full bg-blue-500 hover:bg-blue-700 py-1 px-6 rounded-xl text-white text-xl'>Login</button>
                    </form>

                    <div className='mt-1flex justify-between items-center font-bold'>
                        <span>OR</span>
                    </div>

                    <button className='mt-2 bg-white py-1 w-full text-lg font-semibold flex gap-3 justify-center items-center'>
                        <img src={google} className="h-8" alt="" />
                        Log in with Google
                    </button>

                    <p className='text-blue-700 mt-2'>
                        <a href="#">
                            Forgot you password?
                        </a>
                    </p>

                    <p className='font-semibold'>
                        New to OfficeHub?
                        <a href="/signup" className='text-blue-700'>
                            &nbsp;Register Here.
                        </a>
                    </p>

                </div>

                <div className="w-[50%] sm:block hidden">
                    <img src={office} className="h-full rounded-3xl" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login
