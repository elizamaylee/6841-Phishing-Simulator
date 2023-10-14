import React from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string;
  textColour: string;
  backgroundColour: string;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  const { text, textColour, backgroundColour, onClick } = props;
  return (
    <StyledButton
      onClick={onClick}
      style={{
        background: backgroundColour,
        color: textColour,
      }}
    >
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  padding: 8px 16px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid var(--system-blue-gray, #525f7f);
  cursor: pointer;
`;

export default Button;
