import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function AuthLayouts({ type, children }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xs">
        {type === 'login' ? (
          <div className="mb-3">
            <h1 className="mb-2 text-4xl font-bold text-primary">Login.</h1>
            <p className="text-sm text-slate-500">
              Silahkan masukan username dan password anda
            </p>
          </div>
        ) : (
          <div className="mb-3">
            <h1 className="mb-2 text-4xl font-bold text-primary">Register.</h1>
            <p className="text-sm text-slate-500">
              Silahkan daftar terlebih dahulu
            </p>
          </div>
        )}
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
}

function Navigation({ type }) {
  if (type === 'login') {
    return (
      <p className="mt-3 text-sm text-center">
        Tidak punya akun?{' '}
        <Link to="/register" className="font-bold text-primary">
          Register
        </Link>
      </p>
    );
  }
  return (
    <p className="mt-3 text-sm text-center">
      Sudah punya akun?{' '}
      <Link to="/login" className="font-bold text-primary">
        Login
      </Link>
    </p>
  );
}

Navigation.propTypes = {
  type: PropTypes.string.isRequired,
};

AuthLayouts.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};
