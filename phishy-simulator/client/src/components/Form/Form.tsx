import { createContext, useState, useCallback, useContext } from "react";
import { produce } from "immer";
import { Tab } from "@headlessui/react";
import {
  WelcomeForm,
  SelectTemplateForm,
  SelectTargetForm,
} from "../../components";
import SelectDeliveryForm from "./SelectDeliveryForm/SelectDeliveryForm";

export const FORM_STEPS = [
  {
    label: "welcome",
  },
  {
    label: "template",
  },
  {
    label: "target",
  },
  {
    label: "delivery",
  },
];
7;
export const FORM_STATE = {
  selectedIndex: 0,
  steps: {
    welcome: {
      valid: false,
      dirty: false,
      value: {},
    },
    template: {
      valid: false,
      dirty: false,
      value: {
        templateId: 0,
      },
    },
    target: {
      valid: false,
      dirty: false,
      value: {
        users: [], // users in format {email: "", name: ""}
      },
    },
    delivery: {
      valid: false,
      dirty: false,
      value: {
        deliveryDate: "",
        deliveryTime: "",
        recurring: false,
      },
    },
  },
};

export const FormStateContext = createContext({
  form: FORM_STATE,
  setForm: (
    form: typeof FORM_STATE | ((form: typeof FORM_STATE) => typeof FORM_STATE)
  ) => {},
});

const Form = () => {
  const [form, setForm] = useState(FORM_STATE);
  return (
    <FormStateContext.Provider value={{ form, setForm }}>
      <CreateTaskMultiStepForm />
    </FormStateContext.Provider>
  );
};

// Renders the Stepper component
const CreateTaskMultiStepForm = () => {
  const { form, setForm } = useContext(FormStateContext);
  const next = useCallback(() => {
    console.log("before" + form.selectedIndex);

    // setForm({ ...form, selectedIndex: selectedIndex + 1 });

    setForm(
      produce((form) => {
        form.selectedIndex += 1;
      })
    );
    console.log("after" + form.selectedIndex);
  }, [setForm]);

  const prev = useCallback(() => {
    setForm(
      produce((form) => {
        form.selectedIndex -= 1;
      })
    );
  }, [setForm]);

  const setSelectedIndex = useCallback(
    (selectedIndex: number) => {
      setForm(
        produce((form) => {
          form.selectedIndex = selectedIndex;
        })
      );
    },
    [setForm]
  );

  const selectedIndex = form.selectedIndex;
  return (
    <Tab.Group selectedIndex={selectedIndex}>
      <Tab.List>
        <Tab>Welcome</Tab>
        <Tab>Template</Tab>
        <Tab>Target</Tab>
        <Tab>Delivery</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <WelcomeForm onNext={next} onPrev={prev}></WelcomeForm>
        </Tab.Panel>
        <Tab.Panel>
          <SelectTemplateForm onNext={next} onPrev={prev}></SelectTemplateForm>
        </Tab.Panel>
        <Tab.Panel>
          <SelectTargetForm onNext={next} onPrev={prev}></SelectTargetForm>
        </Tab.Panel>
        <Tab.Panel>
          <SelectDeliveryForm onNext={next} onPrev={prev}></SelectDeliveryForm>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};
export default Form;
