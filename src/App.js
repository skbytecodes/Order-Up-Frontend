import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ParentRestaurant from "./components/ParentRestaurant";

function App() {
  window.globalPrentUrl = "http://localhost:8080";
  window.publicImagePath = "/images/";
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<ParentRestaurant />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
