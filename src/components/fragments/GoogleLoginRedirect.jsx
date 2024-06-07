import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authSuccess } from '../states/authUser/action';

export default function GoogleLoginRedirect() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authUser.user);
  const token = useSelector((state) => state.authUser.token);

  useEffect(() => {
    const fetchUser = () => {
      if (token && user) {
        dispatch(authSuccess(token, user));
        navigate('/');
      } else {
        navigate('/login');
      }
    };

    fetchUser();
  }, [dispatch, navigate]);

  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}
