import React from 'react';

const Button = ({ id, label, selected, onClick, className }) => {
  return (
    <button   
            className={`custom-button ${selected ? 'selected' : ''} ${className}`}
             onClick={() => onClick(id)}>
      {label}
    </button>
  );
};

export default Button;