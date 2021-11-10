import { BrowserRouter, Route, Routes } from "react-router-dom";
import HW from "./components/hw";
import Blog from "./components/blog";
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/hw" element={<HW />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
