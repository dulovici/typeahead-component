import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CustomCountryPicker from "./components/customCountries/CustomCountryPicker";
import CountryPicker from "./components/countries/CountryPicker";
import { useState } from "react";
import { TypeAhead } from "./enums";

function App() {
  const [activeComponent, setActiveComponent] = useState<TypeAhead>(TypeAhead.Mui);
  const isMUI = activeComponent === TypeAhead.Mui
  
  return (
    <>
      <div className="flex justify-center mb-4">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
      </div>
      <h1 className="mb-4">OnPoint Development Exercise</h1>

      <div className="flex justify-around">
          <h3 onClick={() => setActiveComponent(TypeAhead.Mui)} className={`cursor-pointer ${isMUI ? 'text-amber-700' : ''}`}>MUI Component</h3>
          <h3 onClick={() => setActiveComponent(TypeAhead.Custom)} className={`cursor-pointer ${!isMUI ? 'text-amber-700' : ''}`}>Custom Component</h3>
      </div>

      {activeComponent === TypeAhead.Mui ? <CountryPicker /> : <CustomCountryPicker />}
      
    </>
  );
}

export default App;
