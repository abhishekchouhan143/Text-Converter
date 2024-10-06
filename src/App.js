import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import About from "./components/About.js";
import { useState } from "react";
import Alert from "./components/Alert.js";

function App() {
  // use state background color change.
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode has been enabled", "success");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      showAlert("Light mode has been enabled", "success");
      document.body.style.backgroundColor = "white";
    }
  };

  //alert use state.
  const [alert, setAlert] = useState(" ");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert("");
    }, 1700);
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <TextForm
        showAlert={showAlert}
        heading="Enter the text to analyze below."
        mode={mode}
      />
      <About showAlert={showAlert} mode={mode} />
    </>
  );
}

export default App;
