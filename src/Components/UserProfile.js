import { Avatar, Button } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { getSplitedName } from '../Utils/utils';
import { UserAction, UserCartAction } from '../Redux/Actions/UsersAction';
import { UserProfileAction } from '../Redux/Actions/ComponentActions';
import { useNavigate } from 'react-router-dom';

const UserProfile = ({ user, dispatch }) => {
  const wrapperRef = useRef();
  const navigate = useNavigate();

  const handleUserLogout = () => {
    localStorage.clear();
    dispatch(UserAction(null));
    dispatch(UserCartAction([]));
    dispatch(UserProfileAction(false));
    navigate('/');
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        // Click outside the component
        dispatch(UserProfileAction(false));
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener('mousedown', handleOutsideClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [dispatch]);
  return (
    <div className='w-[200px] h-[120px] rounded-lg bg-gray-100 p-4' ref={wrapperRef}>
      <div className='flex'>
        <div>
          <Avatar
            className='cursor-pointer mt-[-2px]'
            sx={{ width: 38, height: 38 }}
          >
            {user ? getSplitedName(user?.firstName, user?.lastName) : null}
          </Avatar>
        </div>
        <div className='flex flex-col ml-2 mt-[-4px]'>
          <div className='text-lg font-bold'>
            {user?.firstName + " " + user?.lastName}
          </div>
          <div className='text-base text-gray-500 font-semibold'>
            +91 {user?.phoneNumber}
          </div>
        </div>

      </div>
      <div className='flex justify-center items-start mt-2'>
        <Button color='error' variant='contained' onClick={handleUserLogout}>Logout</Button>
      </div>
    </div>
  )
}

export default UserProfile;