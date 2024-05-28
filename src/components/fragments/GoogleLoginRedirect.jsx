import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { handleGoogleAuthCallback } from '../states/authUser/action';

export default function GoogleLoginRedirect() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const fetchUser = async () => {
      const queryParams = new URLSearchParams(location.search);
      const token = queryParams.get('token');
      const user = JSON.parse(queryParams.get('user'));

      if (token && user) {
        await dispatch(handleGoogleAuthCallback(token, user));
        navigate('/');
      } else {
        navigate('/login');
      }
    };

    fetchUser();
  }, [dispatch, location.search, navigate]);

  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}
