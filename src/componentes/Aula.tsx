import { CheckCircleIcon, LockClosedIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

interface AulaProps {
  titulo: string;
  slug: string;
  dataDisponibilidade: Date;
  tipo: "aoVivo" | "aula";
}

const Aula = (props: AulaProps) => {
  const aulaEstaLiberada = false;
  return (
    <Link to={`/evento/aula/${props.slug}`} className="group">
      <span className="text-gray-300">{props.dataDisponibilidade.toString()}</span>

      <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500">
        <header className="flex items-center justify-between">
          {aulaEstaLiberada ? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
              <CheckCircleIcon className="h-5 w-5" />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <LockClosedIcon className="h-4 w-4" />
              Em breve
            </span>
          )}

          <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
            {props.tipo === "aoVivo" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <p className="text-gray-200 font-medium mt-5 block">{props.titulo}</p>
      </div>
    </Link>
  );
};

export default Aula;
