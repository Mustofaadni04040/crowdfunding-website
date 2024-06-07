import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Breadcrumbs from '../components/elements/breadcrumb/Breadcrumbs';
import Profile from '../components/fragments/profilePage/Profile';
import { asyncDeleteUser } from '../components/states/authUser/action';

export default function ProfilePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteUserAccount = (_id, token) => {
    dispatch(asyncDeleteUser(_id, token));
    navigate('/');
  };
  return (
    <main>
      <Breadcrumbs />
      <Profile onDeleteUserAccount={deleteUserAccount} />
    </main>
  );
}
