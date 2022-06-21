import React from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App(): JSX.Element {
  return (
    <div className="App mt-6 mx-6">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
