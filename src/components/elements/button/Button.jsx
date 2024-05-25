import React from 'react';
import PropTypes from 'prop-types';

export default function Button({
  children,
  submit,
  classname,
  onClick = () => {},
}) {
  return (
    <button
      className={classname}
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  submit: PropTypes.bool,
  classname: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
