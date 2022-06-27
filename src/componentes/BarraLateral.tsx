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
          dataDisponibilidade={new Date("June 20, 2022 19:00:00")}
          tipo="aula"
        />
        <Aula
          titulo="Aula 02"
          slug="aula-02"
          dataDisponibilidade={new Date("June 21, 2022 19:00:00")}
          tipo="aoVivo"
        />
        <Aula
          titulo="Aula 03"
          slug="aula-03"
          dataDisponibilidade={new Date("June 22, 2022 19:00:00")}
          tipo="aula"
        />
        <Aula
          titulo="Aula 04"
          slug="aula-04"
          dataDisponibilidade={new Date("June 23, 2022 19:00:00")}
          tipo="aoVivo"
        />
        <Aula
          titulo="Aula 05"
          slug="aula-05"
          dataDisponibilidade={new Date("June 24, 2022 19:00:00")}
          tipo="aoVivo"
        />
      </div>
    </aside>
  );
};

export default BarraLateral;
