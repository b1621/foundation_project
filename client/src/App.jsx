import './App.css';
import Home from './pages/Home';
// import Footer from './components/Footer';
import Navigation from './components/Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Page404 from './pages/Page404';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Volunteer from './pages/Volunteer';

function App() {
  return (
    <>
      <Router>
        <div>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/blogs" element={<Blogs />}></Route>
            <Route exact path="/volunteer" element={<Volunteer />}></Route>
            <Route exact path="*" element={<Page404 />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
