import React from 'react';
import Routes from  "./routes";
import {Provider} from 'react-redux';
import store from './store/index';

import Header from './componentes/Header/index';
import "./stylesGlobal.css";



function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <Header />
          <Routes />
      </Provider>      
    </div>
  );
}

export default App;
