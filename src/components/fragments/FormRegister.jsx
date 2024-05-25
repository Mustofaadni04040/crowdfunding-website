import React, { useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';
import Button from '../elements/button/Button';

export default function FormRegister() {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    // register({ name, email, password });
  }
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name" className="text-slate-500 text-sm">
        Username
        <input
          className="text-sm mb-3 border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50 outline-none focus:ring-1 focus:ring-primary"
          name="name"
          ref={usernameRef}
          type="text"
          id="name"
          placeholder="masukan username..."
          onChange={onNameChange}
          value={name}
          required
        />
      </label>
      <label htmlFor="email" className="text-slate-500 text-sm">
        Email
        <input
          className="text-sm mb-3 border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50 outline-none focus:ring-1 focus:ring-primary"
          name="email"
          type="email"
          id="email"
          placeholder="masukan email..."
          onChange={onEmailChange}
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
          placeholder="*********"
          onChange={onPasswordChange}
          value={password}
          required
        />
      </label>

      <Button
        submit
        classname="flex items-center justify-center w-full py-1 px-3 rounded bg-primary text-white hover:bg-[#3825B5] duration-200"
      >
        Register
      </Button>
      <p className="flex justify-center text-slate-500 text-sm my-1">Atau</p>
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

// FormRegister.propTypes = {
//   register: PropTypes.func.isRequired,
// };
