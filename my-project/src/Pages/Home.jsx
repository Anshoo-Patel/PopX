import React from 'react';
import { useNavigate} from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-center min-h-screen bg-white'>
        
        <div className='w-80 h-[550px] bg-white border border-gray-200 shadow-sm rounded-md flex flex-col justify-end p-6'>
            
            <div>
                
                <h2 className='text-xl font-bold text-gray-900'>Welcome to PopX</h2>
                
                <p className='text-sm text-gray-600 mt-1 mb-6'>Lorem ipsum dolor sit amet<br /> consectetur adipisicing elit.</p>
                
                <button
                 onClick={()=>navigate('/register')}
                 className='w-full cursor-pointer bg-violet-700 text-white py-2 rounded mb-3'>
                    Creat Account
                </button>
                
                <button 
                onClick={()=>navigate('/login')}
                className='w-full cursor-pointer bg-violet-300 text-gray-800 py-2 rounded'>Already Registered? Login</button>
            
            </div>
        
        </div>
    
    </div>
  )
}

export default Home