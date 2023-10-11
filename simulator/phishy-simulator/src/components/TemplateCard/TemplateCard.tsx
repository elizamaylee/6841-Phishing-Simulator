import React from "react";
import "./TemplateCard.css";
import { arc, unsw, referendum } from "../../assets";
import Label from "../Label/Label";

const TemplateCard = (props: { title: string; active: boolean }) => {
  const { title, active } = props;
  return (
    <template>
      <div className="top-rectangle"></div>
      <div className="card-content-container">
        <img className="template-image" src={arc} alt="" />
        <div className="template-title">{title}</div>
        <Label description="university students" colour="blue"></Label>
      </div>
    </template>
  );
};

export default TemplateCard;
