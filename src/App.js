import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from "./pages/Homepage";
import Cartpage from './pages/Cartpage';


function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' Component={Homepage} />
          <Route path='/cart' Component={Cartpage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
