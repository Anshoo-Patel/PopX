import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

function Register() {

  const [formData, setFormData] = useState({
    name: '',
    phone: "",
    email: "",
    password: '',
    company: '',
    agency: "yes",
  });

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value});
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setUser({
        name: formData.name,
        email: formData.email,
    });

    navigate("/account");

  }; 

    const isFormValid =
     formData.name &&
     formData.phone &&
     formData.email &&
     formData.password &&
     formData.company;
  

  return (
    <div className='flex items-center justify-center h-screen bg-white'>
        <div className='max-w-sm w-full bg-whiye p-8 rounded-lg shadow-md border border-gray-200'>
            <h2 className='text-2xl font-bold mb-8 text-gray-900'>
                Create your<br /> PopX account
            </h2>
            <form className='space-y-5' onSubmit={handleRegister}>
                <div>
                    <label className='block text-sm font-medium text-violet-700'>Full Name<span className='text-red-600'>*</span></label>
                    <input type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className='mt-1 w-full rounded px-3 py-2 text-sm focus:ring-2 focus: ring-purple-500 outline-none'
                    required />
                </div>
                <div>
                    <label className='block text-sm font-medium text-violet-700'>Phone number<span className='text-red-600'>*</span></label>
                    <input type='text'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    className='mt-1 w-full rounded px-3 py-2 text-sm focus:ring-2 focus: ring-purple-500 outline-none'
                    required />
                </div>
                <div>
                    <label className='block text-sm font-medium text-violet-700'>Email address<span className='text-red-600'>*</span></label>
                    <input type='email'
                    value={formData.email}
                    name='email'
                    onChange={handleChange}
                    className='mt-1 w-full rounded px-3 py-2 text-sm focus:ring-2 focus: ring-purple-500 outline-none'
                    required />
                </div>
                <div>
                    <label className='block text-sm font-medium text-violet-700'>Password<span className='text-red-600'>*</span></label>
                    <input type='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    className='mt-1 w-full rounded px-3 py-2 text-sm focus:ring-2 focus: ring-purple-500 outline-none'
                    required />
                </div>
                <div>
                    <label className='block text-sm font-medium text-violet-700'>Company name<span className='text-red-600'>*</span></label>
                    <input type='text'
                    name='company'
                    value={formData.company}
                    onChange={handleChange}
                    className='mt-1 w-full rounded px-3 py-2 text-sm focus:ring-2 focus: ring-purple-500 outline-none'
                    required />
                 </div>
                 <div>
                    <p className='text-sm font-medium text-violet-700'>Are you an Agency?<span className='text-red-600'>*</span></p>
                    <div className='flex mt-2 space-x-6'>
                       <label className='flex items-center space-x-2'>
                        <input type='radio' value="yes" 
                        name='agency'
                        checked={formData.agency === "yes"}
                        onChange={handleChange}
                        className='accent-violet-700'
                        />
                        <span>Yes</span>
                        </label>
                       <label className='flex items-center space-x-2'>
                        <input type='radio' value="no"
                        name='agency'
                        checked={formData.agency === "no"}
                        onChange={handleChange}
                        className='accent-pviolet-700'
                        />
                        <span>No</span>
                        </label>
                    </div>
                 </div>

                 <button
                 type='submit'
                 disabled={!isFormValid}
                 className={`w-full py-2 rounded text-white font-medium cursor-pointer bg-violet-700 transition ${
                    isFormValid
                    ?" hover:bg-purple-700"
                    :" cursor-not-allowed"
                 }`}>
                    Creat Account
                 </button>
            </form>
        </div>
    </div>
  )
}

export default Register