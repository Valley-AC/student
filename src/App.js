import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Trainings from './pages/trainings/Trainings';

function App() {
  return (
    <div className="App"> 
     <Header></Header>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/soft" element={<Trainings />} />
   
      


  </Routes>

   
   
    </div>
  );
}

export default App;
