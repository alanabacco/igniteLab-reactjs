import { CheckCircleIcon } from "@heroicons/react/outline";

const Aula = () => {
  return (
    <a href="#">
      <span className="text-gray-300">
        Terça • 28 de junho • 19h00
      </span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
            <CheckCircleIcon className="h-5 w-5" />
            Conteúdo liberado
          </span>

          <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
            AO VIVO
          </span>
        </header>

        <p className="text-gray-200 font-medium mt-5 block">
          Abertura do evento Ignite Lab
        </p>
      </div>
    </a>
  );
};

export default Aula;
