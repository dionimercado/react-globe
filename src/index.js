import React from "react";
import ReactDOM from "react-dom";
import ReactGlobe from "react-globe";

// import "./styles.css";

function App() {
  return (
    <div className="App">
      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactGlobe
          size={[300, 300]}
          globeOptions={{ enableBackground: false }}
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
