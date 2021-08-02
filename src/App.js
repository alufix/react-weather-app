import Weather from "./Weather"; 

export default function App() {
  return (
    <div className="App">
      <div className="container" id="app-bg">
        <Weather defaultCity="Osaka" />
      </div>
    </div>
  );
}
