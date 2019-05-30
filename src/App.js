import React from 'react';
import Routes from  "./routes";

import Header from './componentes/Header/index';
import "./stylesGlobal.css";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
