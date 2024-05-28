import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthLayouts from '../components/layouts/AuthLayouts';
import FormLogin from '../components/fragments/FormLogin';
import { asyncLoginUser } from '../components/states/authUser/action';

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = async ({ email, password }) => {
    const user = await dispatch(asyncLoginUser({ email, password }));
    if (user) {
      navigate('/');
    }
  };

  return (
    <AuthLayouts type="login">
      <FormLogin login={onLogin} />
    </AuthLayouts>
  );
}
