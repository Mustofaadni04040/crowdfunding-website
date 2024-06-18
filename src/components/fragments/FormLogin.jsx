import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Spinner, Label, TextInput } from 'flowbite-react';
import {
  HiMail,
  HiOutlineLockClosed,
  HiOutlineEye,
  HiOutlineEyeOff,
} from 'react-icons/hi';
import useInput from '../../hooks/useInput';
import Btn from '../elements/button/Button';

export default function FormLogin({ login }) {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [showPassword, setShowPassword] = useState(false);
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

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col max-w-md gap-2">
      <Label className="text-sm text-slate-500" htmlFor="email" value="Email" />
      <TextInput
        id="email"
        type="email"
        ref={emailRef}
        placeholder="masukan email..."
        value={email}
        onChange={onChangeEmail}
        icon={HiMail}
        required
      />
      <Label
        className="text-sm text-slate-500"
        htmlFor="password"
        value="Password"
      />
      <div className="relative mb-2">
        <TextInput
          id="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="masukan password..."
          value={password}
          onChange={onChangePassword}
          icon={HiOutlineLockClosed}
          required
        />
        <button
          type="button"
          className="absolute text-xl transform -translate-y-1/2 top-1/2 right-3 text-slate-500"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
        </button>
      </div>
      <Btn
        submit
        classname="flex items-center justify-center w-full px-3 rounded bg-primary text-white hover:bg-[#228211] duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={loading}
      >
        {loading ? <Spinner className="w-6 h-6" /> : 'Masuk'}
      </Btn>
      <p className="flex justify-center text-slate-500">Atau</p>
      <Btn
        classname="text-sm duration-200 bg-white border rounded border-slate-400 text-slate-500 hover:bg-slate-100"
        onClick={handleGoogleLogin}
      >
        <img
          src="../../../assets/google-icon.png"
          alt="google-icon"
          className="w-5 h-5 mr-2"
        />
        Masuk dengan Google
      </Btn>
    </form>
  );
}

FormLogin.propTypes = {
  login: PropTypes.func.isRequired,
};
