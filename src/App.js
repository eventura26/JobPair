import './App.css';
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home'
import About from './components/About'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
