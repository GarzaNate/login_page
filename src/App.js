import React from "react";
import Form from "./components/Form";
import { useSelector } from "react-redux";


function App() {
  
  const mode = useSelector((state) => state.mode)

  return (
    <div className="App" id="light">
      <Form />
    </div>
  );
}

export default App;
