import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Cartpage from "./pages/Cartpage";
import ShopContextProvider from "./context/Shopcontext";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" Component={Homepage} />
            <Route path="/cart" Component={Cartpage} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
