import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { asyncGoogleLoginCallback } from '../states/authUser/action';

export default function GoogleLoginRedirect() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const fetchUser = async () => {
      // mengubah query string menjadi object
      const queryParams = new URLSearchParams(location.search);
      const token = queryParams.get('token');
      const user = JSON.parse(queryParams.get('user'));

      console.log('token', token);
      console.log('user', user);

      if (token && user) {
        const userData = JSON.parse(decodeURIComponent(user));
        await dispatch(asyncGoogleLoginCallback(token, userData));
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
