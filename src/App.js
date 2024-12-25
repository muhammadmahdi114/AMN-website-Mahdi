import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/home';
import Munasibat from './Components/Munasibat/munasibat';
import Taaruf from './Components/Taaruf/taaruf';
import Tableeghat from './Components/Tableeghat/tableeghat';
import Tazakurat from './Components/Tazakurat/tazakurat';
import Mujallah from './Components/Tableeghat/Mujallah';
import Mutabaat from './Components/Tableeghat/Mutabaat';
import BookDetail from './Components/Tableeghat/BookDetail';
import Article from './Components/Tableeghat/Article';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/munasibat" element={<Munasibat />} />
        <Route path="/taaruf" element={<Taaruf />} />
        {/* Tableghaat pages */}
        <Route path="/tableeghat" element={<Tableeghat />} />
        <Route path="/tableeghat/mujallah" element={<Mujallah />} />
        <Route path="/tableeghat/mutabaat" element={<Mutabaat />} />
        <Route path="/tableeghat/bookDetail" element={<BookDetail />} />
        <Route path="/tableeghat/articleDetail" element={<Article />} />
        <Route path="/tazakurat" element={<Tazakurat />} />
      </Routes>
    </Router>
  );
}

export default App;
