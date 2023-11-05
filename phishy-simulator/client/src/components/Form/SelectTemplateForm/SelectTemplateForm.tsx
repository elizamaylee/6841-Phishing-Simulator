import Navbar from "../../Navbar/Navbar";
import { TemplateCard, Button } from "../..";
import { arc, unsw, referendum } from "../../../assets";
import { useState, useContext, useEffect } from "react";
import { useForm, useFormState } from "react-hook-form";
import { produce } from "immer";
import { FormStateContext } from "../Form";

const SelectTemplateForm = (
  props: React.PropsWithChildren<{
    onNext: () => void;
    onPrev: () => void;
  }>
) => {
  const { form, setForm } = useContext(FormStateContext);

  const { register, handleSubmit, control } = useForm({
    shouldUseNativeValidation: true,
    defaultValues: {
      // templateId: form.steps.template.value.templateId,
      templateId: 0,
    },
  });

  // Forbid navigation to other steps whenever the form becomes dirty
  const { isDirty } = useFormState({ control });

  const { ref: templateRef, ...templateControl } = register("templateId", {
    required: true,
  });

  useEffect(() => {
    setForm(
      produce((form) => {
        form.steps.template.dirty = isDirty;
      })
    );
  }, [isDirty, setForm]);
  // const [data, setData] = useState(null);

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

  const toggleActiveStyles = (element: string) => {
    return activeTemplate === element ? "active" : "";
  };

  return (
    <form
      onSubmit={handleSubmit((value) => {
        setForm(
          produce((formState) => {
            formState.steps.template = {
              value,
              valid: true,
              dirty: false,
            };
          })
        );

        props.onNext();
      })}
    >
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
                  className={toggleActiveStyles(item.title)}
                ></TemplateCard>
              );
            })}
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

export default SelectTemplateForm;
