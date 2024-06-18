import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Spinner, TextInput, Label } from 'flowbite-react';
import {
  HiMail,
  HiOutlineLockClosed,
  HiOutlineAtSymbol,
  HiOutlineEye,
  HiOutlineEyeOff,
} from 'react-icons/hi';
import useInput from '../../hooks/useInput';
import Button from '../elements/button/Button';

export default function FormRegister({ register }) {
  const [displayName, ondisplayNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const usernameRef = useRef(null);
  const loading = useSelector((state) => state.authUser.loading);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  function onSubmit(e) {
    e.preventDefault();
    if (password.length <= 6) {
      setError('password harus lebih dari 6 karakter');
      return;
    }
    setError('');
    register({ displayName, email, password });
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col max-w-md gap-2">
      <Label
        className="text-sm text-slate-500"
        htmlFor="name"
        value="Username"
      />
      <TextInput
        id="name"
        type="text"
        ref={usernameRef}
        placeholder="masukan username..."
        value={displayName}
        onChange={ondisplayNameChange}
        icon={HiOutlineAtSymbol}
        required
      />
      <Label className="text-sm text-slate-500" htmlFor="email" value="Email" />
      <TextInput
        id="email"
        type="email"
        placeholder="masukan email..."
        value={email}
        onChange={onEmailChange}
        icon={HiMail}
        required
      />
      <Label
        className="text-sm text-slate-500"
        htmlFor="password"
        value="Password"
      />
      <div className="relative">
        <TextInput
          id="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="masukan password..."
          value={password}
          onChange={onPasswordChange}
          icon={HiOutlineLockClosed}
          required
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center px-3 text-xl text-slate-500"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
        </button>
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
      <Button
        submit
        classname="flex items-center justify-center w-full py-1 px-3 rounded bg-primary text-white hover:bg-[#228211] duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
        disabled={loading}
      >
        {loading ? <Spinner className="w-5 h-5" /> : 'Register'}
      </Button>
    </form>
  );
}

FormRegister.propTypes = {
  register: PropTypes.func.isRequired,
};
