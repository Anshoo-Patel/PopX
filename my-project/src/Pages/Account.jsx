import React, { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import { FaCamera } from 'react-icons/fa';

function Account() {
  
  const { user } = useContext(UserContext);

  return (
    <div className='flex items-center justify-center min-h-screen bg-white'>
      <div className='w-80 h-[500px] bg-white border border-gray-300 rounded-md shadow-sm overflow-hidden flex flex-col'>
        <div className='px-4 py-3 border-b border-gray-200 bg-white'>
          <h2 className='text-lg font-semibold text-gray-700'>Account Settings</h2>
        </div>

        <div className='flex-1 bg-white flex flex-col'>
          <div className='px-4 py-4 flex items-center space-x-4 relative'>
            <div className='relative'>
              <img 
              className='w-14 h-14 rounded-full object-cover'
              src='https://cdn-icons-png.flaticon.com/512/1077/1077114.png'
              alt='profile'
              />
              <span className='absolute bottom-0 right-0 bg-violet-700 p-1 rounded-full border-2 border-white'>
              <FaCamera className='text-white text-xs' />
              </span>
            </div>

            <div>
              <p className='font-semibold text-gray-900 text-sm'>
                {user?.name || "Mary Doe"}
              </p>
              <p className='text-xs text-gray-500'>
                {user?.email || "Mary@gmail.com"}
              </p>
            </div>
          </div>

          <div className='px-4 pb-4'>
            <p className='text-xs text-gray-700 leading-relaxed'>
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;