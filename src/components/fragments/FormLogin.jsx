import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'flowbite-react';
import useInput from '../../hooks/useInput';
import Button from '../elements/button/Button';
import { asyncGoogleAuth } from '../states/authUser/action';

export default function FormLogin({ login }) {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const emailRef = useRef(null);
  const loading = useSelector((state) => state.authUser.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    login({ email, password });
  }

  const handleGoogleLogin = () => {
    dispatch(asyncGoogleAuth());
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email" className="text-slate-500 text-sm">
        Email
        <input
          className="input"
          name="email"
          type="email"
          ref={emailRef}
          id="email"
          placeholder="masukan email..."
          onChange={onChangeEmail}
          value={email}
          required
        />
      </label>
      <label htmlFor="password" className="text-slate-500 text-sm">
        Password
        <input
          className="input"
          name="password"
          type="password"
          id="password"
          placeholder="******************"
          onChange={onChangePassword}
          value={password}
          required
        />
      </label>

      <Button
        submit
        classname="flex items-center justify-center w-full py-1 px-3 rounded bg-primary text-white hover:bg-[#228211] duration-200"
      >
        {loading ? (
          <>
            <Spinner color="success" size="sm" /> Loading...
          </>
        ) : (
          'Login'
        )}
      </Button>
      <p className="flex justify-center my-1 text-slate-500">Atau</p>
      <Button
        classname="flex items-center justify-center gap-2 w-full border border-slate-400 py-1 px-3 rounded bg-white text-slate-500 text-sm hover:bg-slate-100 duration-200"
        onClick={handleGoogleLogin}
      >
        <img
          src="../../../assets/google-icon.png"
          alt="google-icon"
          className="w-5 h-5"
        />
        Masuk dengan Google
      </Button>
    </form>
  );
}

FormLogin.propTypes = {
  login: PropTypes.func.isRequired,
};
