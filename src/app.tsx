import { Route, Routes } from "react-router-dom";

import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Work from "./pages/work";

const App = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/works" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
