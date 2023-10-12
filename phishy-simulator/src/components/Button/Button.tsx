import React from "react";
import "./Button.css";

interface ButtonProps {
  text: string;
  textColour: string;
  backgroundColour: string;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  const { text, textColour, backgroundColour, onClick } = props;
  return (
    <button
      onClick={onClick}
      style={{
        background: backgroundColour,
        color: textColour,
      }}
    >
      {text}
    </button>
  );
  // return <a href="#">{text}</a>;
};

export default Button;
