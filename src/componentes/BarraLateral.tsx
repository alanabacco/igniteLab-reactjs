import Aula from "./Aula";

const BarraLateral = () => {
  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        <Aula
          titulo="Aula 01"
          slug="aula-01"
          dataDisponibilidade={new Date()}
          tipo="aula"
        />
        <Aula
          titulo="Aula 02"
          slug="aula-02"
          dataDisponibilidade={new Date()}
          tipo="aoVivo"
        />
      </div>
    </aside>
  );
};

export default BarraLateral;
