import { HomePage } from "./pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard  from "./pages/Dashboard/Dashboard";
import PaginaNaoEncontrada from "./pages/PaginaNaoEncontrada/index.jsx";

function App() {
   
  const logado = localStorage.getItem('authenticated');
  return (
    <>
    <BrowserRouter>
      <Routes>
        {!logado&&<Route path="/" element={<HomePage />} />}
        {logado &&<Route path="/" element={<Dashboard />} />}
        <Route path="*" element={<PaginaNaoEncontrada/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
