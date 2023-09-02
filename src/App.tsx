import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TypeAhead from "./components/TypeAhead";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>OnPoint Development Exercise</h1>
      <TypeAhead />
    </>
  );
}

export default App;
