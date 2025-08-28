import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

function Login() {

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if(email && password) {
            setUser({
                name: email.split("@")[0],
                email: email,
            });
            navigate("/account");
        }
    };

    const isFormValid = email.trim() !== "" && password.trim() !== "";

    return (
        <div className='flex items-center justify-center min-h-screen bg-white'>
            <div className='w-80 h-[550px] bg-white border border-gray-200 shadow-md rounded-lg p-6'>
                <h2 className='text-2xl font-bold text-gray-900'>Signin to your <br /> PopX account</h2>
                <p className='text-sm text-gray-500 mt-1 mb-6'>Lorem ipsum dolor sit amet<br />consectetur adipisicing elit.</p>
                <form className='space-y-4' onSubmit={handleLogin}>
                    <div>
                        <label className='block text-sm font-medium text-purple-600'>Email Address<span className='text-red-600'>*</span></label>
                        <input type='email' placeholder='Enter email address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='mt-1 w-full rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500'
                        required />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-purple-600'>Password<span className='text-red-600'>*</span></label>
                        <input type='password' placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='mt-1 w-full rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500'
                        required />
                    </div>
                    <button type='sibmit'
                    className={`w-full py-2 rounded font-medium transition  bg-purple-300 cursor-pointer
                        ${
                        isFormValid ? " text-white hover:bg-blue-300"
                                    : " text-white cursor-not-allowed"
                    }`}
                    disabled={!isFormValid}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;