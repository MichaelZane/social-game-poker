import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import { Routes } from 'react-router-dom'


function App() {
  return (
    <Routes>
      <Header />
      <Home />
    </Routes>
  );
}

export default App;
