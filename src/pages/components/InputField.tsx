import React from 'react';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const InputField: React.FC<Props> = ({ value, onChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      className="input-field"
      type="text"
      placeholder="Type something..."
      value={value}
      onChange={handleInputChange}
    /> 
  ); 
};

export default InputField;
