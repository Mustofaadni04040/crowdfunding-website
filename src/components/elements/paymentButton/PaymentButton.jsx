import React from 'react';
import PropTypes from 'prop-types';

export default function PaymentButton({
  children,
  submit,
  classname,
  disabled,
  onClick = () => {},
}) {
  return (
    <button
      className={classname}
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
PaymentButton.propTypes = {
  children: PropTypes.node.isRequired,
  submit: PropTypes.bool,
  classname: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
