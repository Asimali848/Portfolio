import { Route, Routes } from "react-router-dom";

import About from "./pages/about";
import Home from "./pages/home";
import Work from "./pages/work";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
    </Routes>
  );
};

export default App;
