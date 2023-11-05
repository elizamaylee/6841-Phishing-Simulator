import React from "react";
import Button from "../../Button/Button";
import { ReactMultiEmail, isEmail } from "react-multi-email";
import "react-multi-email/dist/style.css";
import "./SelectTargetForm.css";

const SelectTargetForm = (
  props: React.PropsWithChildren<{
    onNext: () => void;
    onPrev: () => void;
  }>
) => {
  const [emails, setEmails] = React.useState<string[]>([]);
  const [focused, setFocused] = React.useState(false);
  //   const { form, setForm } = useContext(FormStateContext);
  return (
    <form>
      <div className="body-container">
        <div className="content-container">
          <div className="heading-container">
            <h1>Add user targets</h1>
            <div className="description">
              Add the email addresses of users who are participating in this
              phishing email simulation.
            </div>
          </div>
          <ReactMultiEmail
            emails={emails}
            onChange={(_emails: string[]) => {
              setEmails(_emails);
            }}
            autoFocus={true}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            getLabel={(email, index, removeEmail) => {
              return (
                <div data-tag key={index}>
                  <div data-tag-item>{email}</div>
                  <span data-tag-handle onClick={() => removeEmail(index)}>
                    x
                  </span>
                </div>
              );
            }}
          ></ReactMultiEmail>
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
