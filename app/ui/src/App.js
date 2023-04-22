import './App.css';
import './strings.js'
import API from './api';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"

import { useEffect, useState } from 'react';
import Login from './pages/login';

function App() {

  return (
    <div className="App">
    <Router>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
