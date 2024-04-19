import React from "react";

interface ButtonProps {
  text: string;
  width?: string;
  pd?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, width, pd, onClick }) => {
  return (
    <button 
    onClick={onClick}
    className={`flex items-center justify-center ${width} ${pd} rounded-full bg-blue-500 hover:bg-blue-300 text-white shadow-md`}>
      {text}
    </button>
  );
};

export default Button;
