import React from "react";
import "./TemplateCard.css";
import Label from "../Label/Label";

const TemplateCard = (props: {
  title: string;
  onClick: React.MouseEventHandler<HTMLTemplateElement>;
  img: string;
}) => {
  const { title, onClick, img } = props;
  return (
    <template onClick={onClick}>
      <div className="top-rectangle"></div>
      <div className="card-content-container">
        <img className="template-image" src={img} alt="" />
        <div className="template-title">{title}</div>
        <Label description="university students" colour="blue"></Label>
      </div>
    </template>
  );
};

export default TemplateCard;
