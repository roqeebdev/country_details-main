import NavBar from "./NavBar";
import Pagelayout from "./Pagelayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryInfo from "./CountryInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Pagelayout />} />
          <Route path="/:id" element={<CountryInfo/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
