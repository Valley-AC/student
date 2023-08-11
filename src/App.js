import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Trainings from './pages/trainings/Trainings';
import Auth from './components/auth/Auth';
import Signup from './components/auth/Singup';
import Login from './components/auth/Login';

function App() {
  return (
    <div className="App"> 
     <Header></Header>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/soft" element={<Trainings />} />
    <Route path="/auth" element={<Auth />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
   
      


  </Routes>

   
   
    </div>
  );
}

export default App;
