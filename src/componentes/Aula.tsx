import { CheckCircleIcon, LockClosedIcon } from "@heroicons/react/outline";
import { Link, useParams } from "react-router-dom";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface AulaProps {
  titulo: string;
  slug: string;
  dataDisponibilidade: Date;
  tipo: "aoVivo" | "aula";
}

const Aula = (props: AulaProps) => {
  const { slug } = useParams<{ slug: string }>();

  const aulaEstaLiberada = isPast(props.dataDisponibilidade);
  const availableDateFormatted = format(
    props.dataDisponibilidade,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  const aulaEstaAtiva = slug === props.slug;

  return (
    <Link to={`/evento/aula/${props.slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div
        className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${
          aulaEstaAtiva && "bg-green-500"
        }`}
      >
        <header className="flex items-center justify-between">
          {aulaEstaLiberada ? (
            <span
              className={`text-sm font-medium flex items-center gap-2 ${
                aulaEstaAtiva ? "text-white" : "text-blue-500"
              }`}
            >
              <CheckCircleIcon className="h-5 w-5" />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <LockClosedIcon className="h-4 w-4" />
              Em breve
            </span>
          )}

          <span
            className={`text-xs rounded py-[0.125rem] px-2 text-white border font-bold ${
              aulaEstaAtiva ? "border-white" : "border-green-300"
            }`}
          >
            {props.tipo === "aoVivo" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <p
          className={`font-medium mt-5 block ${
            aulaEstaAtiva ? "text-white" : "text-gray-200"
          }`}
        >
          {props.titulo}
        </p>
      </div>
    </Link>
  );
};

export default Aula;
