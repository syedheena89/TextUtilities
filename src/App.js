import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light"); //state variable => weather dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been set ", "success !");
      document.title = "TextUtills - DarkMode";
      // setInterval(() => {
      //   document.title = "TextUtills is amazing website";
      // }, 1500);
      // setInterval(() => {
      //   document.title = "Install textUtills now";
      // }, 1000);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been set ", "success !");
      document.title = "TextUtills - LightMode";
    }
  };

  return (
    <Router>
    <div>
      <Navbar
        title="TextUtills"
        about="AboutTextUtills"
        mode={mode}
        togglemode={toggleMode}
      />
      <Alert alert={alert} mode={mode} />
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route
          exact path="/"
          element={
            <TextForm
              heading="Enter the Text to Analyse"
              mode={mode}
              toggleMode={toggleMode}
              showAlert={showAlert}
            />
          }
        />
      </Routes>
    </div>
    </Router>
  );
}
export default App;
