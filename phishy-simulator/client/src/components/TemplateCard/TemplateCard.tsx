import React from "react";
import Label from "../Label/Label";
import styled from "styled-components";

const StyledTemplate = styled.div`
  display: flex;
  width: 268.8px;
  height: 292.8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 12.8px;
  border: 0.8px solid var(--grey);
  background: var(--ash);
  cursor: pointer;

  &.active {
    border: 1.2px solid var(--light-blue);
    background: var(--white);

    .top-rectangle {
      background: var(--light-blue);
    }
  }

  .top-rectangle {
    height: 8px;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 12.8px 12.8px 0px 0px;
    background: var(--light-ash, #d6dae2);
  }

  .card-content-container {
    display: flex;
    padding: 0px 16px;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    /* flex: 1 0 0; */
    align-self: stretch;
  }

  .template-image {
    width: 236.8px;
    height: 128px;
    object-fit: cover;
    flex-shrink: 0;
    border-radius: 6.4px;
  }

  .template-title {
    flex: 1 0 0;
    align-self: stretch;
    color: var(--system-blue-gray, #525f7f);
    text-align: center;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 28.8px; /* 144% */
  }
`;

const TemplateCard = (props: {
  title: string;
  img: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  className: string;
}) => {
  const { title, img, onClick, className } = props;
  return (
    <StyledTemplate onClick={onClick} className={className}>
      <div className="top-rectangle"></div>
      <div className="card-content-container">
        <img className="template-image" src={img} alt="" />
        <div className="template-title">{title}</div>
        <Label description="university students" colour="blue"></Label>
      </div>
    </StyledTemplate>
  );
};

export default TemplateCard;
