import { useState } from 'react';

export default function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  function handleValueChange(e) {
    setValue(e.target.value);
  }

  return [value, handleValueChange, setValue];
}
