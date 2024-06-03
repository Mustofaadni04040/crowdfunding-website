import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Spinner } from 'flowbite-react';
import useInput from '../../hooks/useInput';
import Button from '../elements/button/Button';

export default function FormRegister({ register }) {
  const [displayName, ondisplayNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const usernameRef = useRef(null);
  const loading = useSelector((state) => state.authUser.loading);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    register({ displayName, email, password });
  }
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name" className="text-slate-500 text-sm">
        Username
        <input
          className="input"
          name="name"
          ref={usernameRef}
          type="text"
          id="name"
          placeholder="masukan username..."
          onChange={ondisplayNameChange}
          value={displayName}
          required
        />
      </label>
      <label htmlFor="email" className="text-slate-500 text-sm">
        Email
        <input
          className="input"
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
          className="input"
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
        classname="flex items-center justify-center w-full py-1 px-3 rounded bg-primary text-white hover:bg-[#228211] duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={loading}
      >
        {loading ? (
          <>
            <Spinner color="success" size="sm" /> Loading...
          </>
        ) : (
          'Register'
        )}
      </Button>
    </form>
  );
}

FormRegister.propTypes = {
  register: PropTypes.func.isRequired,
};
