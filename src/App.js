import "./App.css";
import { Routes, Route } from "react-router-dom";
import CountriesList from "./pages/CountriesList";
import OneCountry from "./pages/OneCountry";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route path="/country/:countryName" element={<OneCountry />} />
      </Routes>
    </div>
  );
}

export default App;
