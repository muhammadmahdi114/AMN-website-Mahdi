import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/home';
import Munasibat from './Components/Munasibat/munasibat';
import Taaruf from './Components/Taaruf/taaruf';
import Tableeghat from './Components/Tableeghat/tableeghat';
import Tazakurat from './Components/Tazakurat/tazakurat';
import Mujallah from './Components/Tableeghat/Mujallah';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/munasibat" element={<Munasibat />} />
        <Route path="/taaruf" element={<Taaruf />} />
        <Route path="/tableeghat" element={<Tableeghat />} />
        <Route path="/tableeghat/mujallah" element={<Mujallah />} />
        <Route path="/tazakurat" element={<Tazakurat />} />
      </Routes>
    </Router>
  );
}

export default App;
