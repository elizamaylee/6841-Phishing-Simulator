import React, { useState } from "react";
import { Navbar, TemplateCard, Button } from "./components";
import "./App.css";
import { arc, unsw, referendum } from "./assets";

const App = () => {
  // Set the clicked template to be active
  const [activeTemplate, setActiveTemplate] = useState("");

  const templateData = [
    { title: "Important Arc Club Executive Updates", img: arc },
    { title: "UNSW Exam Timetable Release", img: unsw },
    { title: "2023 Referendum", img: referendum },
  ];

  const handleSelectTemplate = (value: string) => {
    console.log("activeTemplate = " + activeTemplate);
    setActiveTemplate(value);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="body-container">
        <div className="content-container">
          <div className="heading-container">
            <h1>Select a phishing template</h1>
            <div className="description">
              This template will be used to create the email users will see when
              the simulation begins.
            </div>
          </div>
          <div className="cards-gallery">
            {templateData.map((item) => {
              return (
                <TemplateCard
                  title={item.title}
                  img={item.img}
                  onClick={() => handleSelectTemplate(item.title)}
                ></TemplateCard>
              );
            })}
          </div>
          <div className="buttons-container">
            <Button
              text="Return"
              textColour="#525F7F"
              backgroundColour="#F7F8FC"
              onClick={() => console.log("Return")}
            ></Button>
            <Button
              text="Continue"
              textColour="white"
              backgroundColour="#25A7F1"
              onClick={() => console.log("COntinue")}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
