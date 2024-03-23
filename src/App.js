import './App.css';
import React from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/';
import Job from './pages/jobs';
import School from './pages/school';
import Project from './pages/projects';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/work_experience' element={<Job/>}/>
        <Route exact path='/classes' element={<School/>}/>
        <Route exact path='/projects' element={<Project/>}/>
      </Routes>
    </Router>
  );
}

export default App;
