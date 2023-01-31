import React, {useState} from "react";
import Form from "./components/Form";
import { useSelector } from "react-redux";


function App() {
const [darkMode, setdarkMode] = useState(false);

  return (
    <div className="App" id="">
      <Form />
    </div>
  );
}

export default App;
