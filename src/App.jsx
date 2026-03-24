import { Routes, Route } from "react-router-dom";
import "./App.css";  
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
// import Shop from "./pages/Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
         <Route path="about" element={<About />} />
        {/* <Route path="shop" element={<Shop />} />  */}
      </Route>
    </Routes>
  );
}

export default App;