import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import FormRegister from '../components/fragments/FormRegister';
import AuthLayouts from '../components/layouts/AuthLayouts';
import { asyncRegisterUser } from '../components/states/authUser/action';

export default function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = async ({ displayName, email, password }) => {
    const user = await dispatch(
      asyncRegisterUser({ displayName, email, password }),
    );
    if (user) {
      navigate('/login');
    }
  };

  return (
    <AuthLayouts type="register">
      <FormRegister register={onRegister} />
    </AuthLayouts>
  );
}
