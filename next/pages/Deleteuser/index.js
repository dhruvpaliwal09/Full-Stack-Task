

import React, { useState } from 'react';

const Delete = () => {
  const [userId, setUserId] = useState('');

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handleDeleteUser = async () => {
    try {
      const response = await fetch(`http://localhost:5000/users/${userId}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <>
      <div className='bg-gray-800 py-6 mx-6 mt-6'>
        <h1 className='ml-7 text-white'>Delete user</h1>
        <div className='ml-7'>
          <input
            type='text'
            placeholder='User ID'
            className='border-black'
            value={userId}
            onChange={handleUserIdChange}
          />
          <button
            className='bg-black text-white mx-6 px-7'
            onClick={handleDeleteUser}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Delete;
