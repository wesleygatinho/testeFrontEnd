import { HomePage } from "./pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard  from "./pages/Dashboard/Dashboard";

function App() {
   
  const logado = localStorage.getItem('authenticated');
  return (
    <>
    <BrowserRouter>
      <Routes>
        {!logado&&<Route path="/" element={<HomePage />} />}
        {logado &&<Route path="/" element={<Dashboard />} />}
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
