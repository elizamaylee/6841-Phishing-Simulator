import React from "react";
import Button from "../../Button/Button";

const SelectTargetForm = (
  props: React.PropsWithChildren<{
    onNext: () => void;
    onPrev: () => void;
  }>
) => {
  //   const { form, setForm } = useContext(FormStateContext);
  return (
    <form>
      <div className="body-container">
        <div className="content-container">
          <div className="heading-container">
            <h1>Add user targets</h1>
            <div className="description">
              This template will be used to create the email users will see when
              the simulation begins.
            </div>
          </div>
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

export default SelectTargetForm;
