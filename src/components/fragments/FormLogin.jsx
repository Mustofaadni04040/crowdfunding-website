import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Spinner } from 'flowbite-react';
import useInput from '../../hooks/useInput';
import Button from '../elements/button/Button';

export default function FormLogin({ login }) {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const emailRef = useRef(null);
  const loading = useSelector((state) => state.authUser.loading);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    login({ email, password });
  }

  const handleGoogleLogin = () => {
    window.location.href =
      'https://crowdfunding-backend-drab.vercel.app/auth/google';
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email" className="text-sm text-slate-500">
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
      <label htmlFor="password" className="text-sm text-slate-500">
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
        classname="flex items-center justify-center w-full py-1 px-3 rounded bg-primary text-white hover:bg-[#228211] duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={loading}
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
        classname="flex items-center justify-center w-full gap-2 px-3 py-1 text-sm duration-200 bg-white border rounded border-slate-400 text-slate-500 hover:bg-slate-100"
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
