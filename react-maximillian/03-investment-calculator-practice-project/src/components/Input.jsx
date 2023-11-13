import { useState } from 'react';

export default function Input({
  labelInfo,
  name,
  initialValue,
  onInputChange,
}) {
  const [inputValue, setInputValue] = useState(initialValue);

  return (
    <div>
      <label>{labelInfo}</label>
      <input
        type='text'
        required
        value={initialValue}
        name={name}
        onChange={onInputChange}
      />
    </div>
  );
}
