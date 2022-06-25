import Cabecalho from "../componentes/Cabecalho";
import Video from "../componentes/Video";
import BarraLateral from "../componentes/BarraLateral";

const Evento = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Cabecalho />
      <main className="flex flex-1">
        <Video />
        <BarraLateral />
      </main>
    </div>
  );
};

export default Evento;
