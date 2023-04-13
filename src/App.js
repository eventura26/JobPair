import './styles/style.css'
import Main from './components/Main';
import Nav from './components/Nav'
// import { Route, Routes } from 'react-router-dom'
// import Login from './components/Login';
// import Home from './components/Home'
// import About from './components/About'
// import Nav from './components/Nav'
// import UserTypeSelection from './components/UserTypeSelection';
// import Register from './components/Register';
// import RegisterRecruiter from './components/RegisterRecruiter';
// import RegisterJobSeeker from './components/RegisterJobSeeker';

function App() {
  return (
    <div className="App">
            <header className="App-header">
          <Nav />
        </header>
        <main>
          <Main />
        </main>
    </div>
  );
}

export default App;
