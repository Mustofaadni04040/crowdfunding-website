import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'flowbite-react';

export default function Btn({
  children,
  submit,
  classname,
  disabled,
  onClick = () => {},
}) {
  return (
    <Button
      type={submit ? 'submit' : 'button'}
      className={classname}
      disabled={disabled}
      onClick={onClick}
      color="disabled"
    >
      {children}
    </Button>
  );
}
Btn.propTypes = {
  children: PropTypes.node.isRequired,
  submit: PropTypes.bool,
  classname: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
