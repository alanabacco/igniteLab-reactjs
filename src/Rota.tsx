import { Route, Routes } from "react-router-dom";
import Evento from "./paginas/Evento";

const Rota = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Início</h1>} />
      <Route path="/evento" element={<Evento />} />
      <Route path="/evento/aula/:slug" element={<Evento />} />
    </Routes>
  );
};

export default Rota;
