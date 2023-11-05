import React from "react";
import { Button } from "../..";

const SelectDeliveryForm = (
  props: React.PropsWithChildren<{
    onNext: () => void;
    onPrev: () => void;
  }>
) => {
  return (
    <form>
      <div className="body-container">
        <div className="content-container">
          <div className="heading-container">
            <h1>Set up delivery plan</h1>
            <div className="description">
              Add the email addresses of users who are participating in this
              phishing email simulation.
            </div>
          </div>
          <input type="date" />
          <input
            type="checkbox"
            className="toggle-switch-checkbox"
            name="toggleSwitch"
            id="toggleSwitch"
          />
          <div className="buttons-container">
            <Button
              text="Return"
              textColour="#525F7F"
              backgroundColour="#F7F8FC"
              onClick={props.onPrev}
            ></Button>
            <Button
              text="Continue"
              textColour="white"
              backgroundColour="#25A7F1"
              onClick={props.onNext}
            ></Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SelectDeliveryForm;
