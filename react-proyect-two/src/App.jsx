import BarraHeader from "./Header";
import Cuerpo from "./Body";
import "./App.css";

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
  return (
    <>
      <header>
        <BarraHeader></BarraHeader>
      </header>
      <main>
        <Cuerpo></Cuerpo>
      </main>
    </>
  );
}

export default App;
