import React, { useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';
import Button from '../elements/button/Button';

export default function FormLogin() {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    // login({ email, password });
  }
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email" className="text-slate-500 text-sm">
        Email
        <input
          className="text-sm mb-3 border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50 outline-none focus:ring-1 focus:ring-primary"
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
          className="text-sm mb-3 border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50 outline-none focus:ring-1 focus:ring-primary"
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
        classname="flex items-center justify-center w-full py-1 px-3 rounded bg-primary text-white hover:bg-[#3825B5] duration-200"
      >
        Login
      </Button>
      <p className="flex justify-center my-1 text-slate-500">Atau</p>
      <Button classname="flex items-center justify-center gap-2 w-full border border-slate-400 py-1 px-3 rounded bg-white text-slate-500 text-sm hover:bg-slate-100 duration-200">
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

// FormLogin.propTypes = {
//   login: PropTypes.func.isRequired,
// };
