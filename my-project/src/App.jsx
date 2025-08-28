import './App.css';
import react from "react";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Account from './Pages/Account';
import { UserProvider } from './Context/UserContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </Router>
    </UserProvider>
  )
}

export default App
