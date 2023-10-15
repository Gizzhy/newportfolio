import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Home from "./pages/Home";
import Body from "./pages/Body";
import Works from "./pages/Works";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Body" element={<Body />} />
        <Route path="/Works" element={<Works />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
