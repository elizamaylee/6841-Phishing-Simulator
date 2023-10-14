import React from "react";
import "./Label.css";

const Label = (props: { description: string; colour: string }) => {
  const { description, colour } = props;
  return <label>{description}</label>;
};

export default Label;
