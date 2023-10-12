import React from "react";
import { Navbar, TemplateCard, Button } from "./components";
import "./App.css";

const App = () => {
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
            <TemplateCard
              title="Important Arc Club Executive Updates"
              active
            ></TemplateCard>
            <TemplateCard
              title="UNSW Exam Timetable Release"
              active
            ></TemplateCard>
            <TemplateCard title="2023 Referendum" active></TemplateCard>
          </div>
          <div className="buttons-container">
            <Button
              text="Return"
              textColour=""
              backgroundColour=""
              onClick={() => console.log("Return")}
            ></Button>
            <Button
              text="Continue"
              textColour="white"
              backgroundColour="#25A7F1"
              onClick={() => console.log("Continue")}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
