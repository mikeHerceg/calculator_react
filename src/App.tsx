import React from "react";
import "./App.scss";
import { Calculator } from "./components/calculator";
import { CalculatorContextProvider } from "./components/calculator/calculator.context";
function App() {
  return (
    <div className="wrapper">
      <CalculatorContextProvider>
        <Calculator />
      </CalculatorContextProvider>
    </div>
  );
}

export default App;
