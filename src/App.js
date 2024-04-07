<<<<<<< HEAD
<<<<<<< HEAD
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Accomplishment from './pages/Accomplishment';
import About from './pages/About';

function App() {
  return (
    <div>
      <Navbar expand="lg" className="bg-success	shadow">
        <Container>
          <Navbar.Brand href="/"  className='navbar-brand text-white fw-semibold'>Jagat Cricket Academy</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end w-100">
            <Nav.Link href='/' className='active text-uppercase text-white'>Home</Nav.Link>
            <Nav.Link href='/accomplishment' className='text-uppercase text-white'>Accomplishments</Nav.Link>
            <Nav.Link href='/about' className='text-uppercase text-white'>About</Nav.Link>
            <Nav.Link href='/contact' className='text-uppercase text-white'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/accomplishment' element={<Accomplishment />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <footer className='bg-body-tertiary'>
      <p className='p-3 m-0 text-center'>Developed and maintained by Cybermentors</p></footer>
=======
import logo from './logo.svg';
=======
>>>>>>> b7d9f6b (first commit)
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Accomplishment from './pages/Accomplishment';
import About from './pages/About';

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> c62689a (Initialize project using Create React App)
=======
    <div>
      <Navbar expand="lg" className="bg-success	shadow">
        <Container>
          <Navbar.Brand href="/"  className='navbar-brand text-white fw-semibold'>Jagat Cricket Academy</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end w-100">
            <Nav.Link href='/' className='active text-uppercase text-white'>Home</Nav.Link>
            <Nav.Link href='/accomplishment' className='text-uppercase text-white'>Accomplishments</Nav.Link>
            <Nav.Link href='/about' className='text-uppercase text-white'>About</Nav.Link>
            <Nav.Link href='/contact' className='text-uppercase text-white'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/accomplishment' element={<Accomplishment />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <footer className='bg-body-tertiary'>
      <p className='p-3 m-0 text-center'>Developed and maintained by Cybermentors</p></footer>
>>>>>>> b7d9f6b (first commit)
    </div>
  );
}

export default App;
