import { Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Programmes from "./pages/Programmes";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/programmes" element={<Programmes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
