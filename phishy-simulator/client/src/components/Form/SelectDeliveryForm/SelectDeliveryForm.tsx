import { Button } from "../..";
import { arc, unsw, referendum } from "../../../assets";
import { useState, useContext, useEffect } from "react";
import { useForm, useFormState } from "react-hook-form";
import { produce } from "immer";
import { FormStateContext } from "../Form";

const SelectDeliveryForm = (
  props: React.PropsWithChildren<{
    onNext: () => void;
    onPrev: () => void;
  }>
) => {
  const { form, setForm } = useContext(FormStateContext);

  const { register, handleSubmit, control } = useForm({
    shouldUseNativeValidation: true,
    defaultValues: {
      deliveryDate: form.steps.delivery.value.deliveryDate,
    },
  });

  // Forbid navigation to other steps whenever the form becomes dirty
  const { isDirty } = useFormState({ control });

  //   const { ref: deliveryDateRef, ...deliveryDateControl } = register(
  //     "deliveryDate",
  //     {
  //       required: true,
  //     }
  //   );

  useEffect(() => {
    setForm(
      produce((form) => {
        form.steps.delivery.dirty = isDirty;
      })
    );
  }, [isDirty, setForm]);

  const handleChangeDate = (date: Date) => {
    setForm(
      produce((form) => {
        form.steps.delivery.value.deliveryDate = date;
      })
    );
  };

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
          <input
            type="datetime-local"
            onChange={(e) => handleChangeDate(new Date(e.target.value))}
          />
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
