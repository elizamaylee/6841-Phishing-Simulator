import { Form, Navbar } from "./components";
import "./App.css";
import styled from "styled-components";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Form></Form>
    </>
  );
};

const Btn = styled.button`
  display: flex;
  padding: 8px 16px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid var(--system-blue-gray, #525f7f);
  cursor: pointer;
`;

export default App;
