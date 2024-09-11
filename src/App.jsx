import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import "./App.css";
import Registration from "./components/Registration";
import SelectCountry from "./components/SelectCountry";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectCountry />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
