import { Routes, Route } from "react-router";
import Home from "./components/Home";
import AddMovie from "./components/Addmovie";
import Header from "./components/Header";
import "./App.css";
import EditMovie from "./components/Editmovie";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Addmovie" element={<AddMovie />} />
        <Route path="/Editmovie/:id" element={<EditMovie />} />
      </Routes>
    </>
  );
}

export default App;
