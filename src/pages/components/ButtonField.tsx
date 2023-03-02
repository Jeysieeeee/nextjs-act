import React from 'react';

type Props = {
  onClick: () => void;
};

const ButtonField: React.FC<Props> = ({ onClick }) => {
  return (
    <button className="button-field" onClick={onClick}>
      Count Characters
    </button>
  ); <br/>
};

export default ButtonField;
