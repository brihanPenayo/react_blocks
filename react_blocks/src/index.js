import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import Contenedor from './Components/Contenedor/Contenedor';
import Navigation from './Components/Navigation/Navigation';
import SubContent from './Components/SubContent/SubContent';
import Advertisement from './Components/Advertisement/Advertisement';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App>
      <Header />
      <Contenedor>
        <Navigation />
        <Main>
          <SubContent />
          <SubContent />
          <SubContent />
          <Advertisement />
        </Main>
      </Contenedor>
    </App>
  </React.StrictMode>
);
