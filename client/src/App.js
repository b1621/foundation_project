import './App.css';
import Home from './components/Home';
// import Footer from './components/Footer';
import Navigation from './components/Navigation';
import About from './components/About';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Page404 from './components/Page404';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <div>
          <Navigation />
          {/* <Home /> */}
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/Blogs" element={<Blogs />}></Route>
            <Route exact path="*" element={<Page404 />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
