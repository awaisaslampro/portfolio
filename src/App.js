import './App.css';
import { AOS } from 'aos';
import 'aos/dist/aos.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Courses from './pages/Courses'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Courses' element={<Courses />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
