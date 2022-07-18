import React from 'react';
import Home from './Screens/Home';
import Easy from './Screens/Easy';
import Medium from './Screens/Medium';
import Hard from './Screens/Hard';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/easy" element={<Easy />} />
            <Route exact path="/medium" element={<Medium />} />
            <Route exact path="/hard" element={<Hard />} />
        </Routes>
    </Router>  
    )
}

export default App;