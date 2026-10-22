import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Transfer from "./pages/Transfer/Transfer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/room/:roomId" element={<Transfer />} />
      </Routes>
    </BrowserRouter>
  );
}
