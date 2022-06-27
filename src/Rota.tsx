import { Route, Routes } from "react-router-dom";
import Evento from "./paginas/Evento";
import Inscricao from "./paginas/Inscricao";

const Rota = () => {
  return (
    <Routes>
      <Route path="/" element={<Inscricao />} />
      <Route path="/evento" element={<Evento />} />
      <Route path="/evento/aula/:slug" element={<Evento />} />
    </Routes>
  );
};

export default Rota;
