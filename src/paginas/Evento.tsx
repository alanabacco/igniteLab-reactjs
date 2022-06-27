import Cabecalho from "../componentes/Cabecalho";
import Video from "../componentes/Video";
import BarraLateral from "../componentes/BarraLateral";
import { useParams } from "react-router-dom";
import Rodape from "../componentes/Rodape";

const Evento = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Cabecalho />

      <main className="flex flex-1">
        {slug ? <Video slugDaAula={slug} /> : <div className="flex-1" />}
        <BarraLateral />
      </main>

      <Rodape />
    </div>
  );
};

export default Evento;
