import React from 'react';
import FormRegister from '../components/fragments/FormRegister';
import AuthLayouts from '../components/layouts/AuthLayouts';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

export default function RegisterPage() {
  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();

  //   const onRegister = ({ name, email, password }) => {
  //     dispatch(asyncRegisterUser({ name, email, password }));
  //     navigate('/');
  //   };

  return (
    <AuthLayouts type="register">
      <FormRegister />
    </AuthLayouts>
  );
}
