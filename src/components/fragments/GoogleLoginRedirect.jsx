import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { asyncGoogleLogin } from '../states/authUser/action'

export default function GoogleLoginRedirect() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = new URLSearchParams(location.search).get('token');
    if (token) {
      localStorage.setItem('token', token);
      dispatch(asyncGoogleLogin(token, navigate));
    } else {
      navigate('/login');
    }
  }, [dispatch, location.search, navigate]);

  return <div>Loading...</div>;
}
