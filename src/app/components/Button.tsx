// src/app/components/Button.tsx
import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md transition duration-300"
    >
      {label}
    </button>
  );
};

export default Button;