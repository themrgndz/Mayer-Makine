import React from 'react'; 
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Tr from './pages/Tr';
import En from './pages/En';
import De from './pages/De';

function App() {
  return (
    <Router>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,500,700%7cPoppins:400,600,700&display=swap"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
      <>
        <div className="App">
          <Routes>
            <Route path="/" element={<Tr />} />
            <Route path="/en" element={<En />} />
            <Route path="/de" element={<De />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
