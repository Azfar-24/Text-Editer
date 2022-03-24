import React, { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  const [mode, setMode] = useState("light");

  const darkModeHandler = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlertHandler("dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlertHandler("light mode has been enabled", "success");
    }
  };

  const [alert, setAlert] = useState("");
  const showAlertHandler = (message, type) => {
    setAlert({ msg: message, type: type });
    // setTimeout(setAlert(""), 1500);
  };

  return (
    <div>
      <Navbar title="TextUnits" mode={mode} darkmode={darkModeHandler} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm mode={mode} title="Enter Your Text Here" />
      </div>
    </div>
  );
}

export default App;
