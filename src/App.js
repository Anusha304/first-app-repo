import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import DisplayAllItems from './component/DisplayAllItems';
import AddNewItem from './component/AddNewItem';
import UpdateItems from './component/UpdateItems';
import DeleteItem from './component/DeleteItem';
import Contact from './component/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Pizza Store</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/display">Display All Items</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/add">Add New Item</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/display" element={<DisplayAllItems />} />
        <Route path="/add" element={<AddNewItem />} />
        <Route path="/update/:id" element={<UpdateItems />} />
        <Route path="/delete" element={<DeleteItem />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </Router>
  );
};

export default App;