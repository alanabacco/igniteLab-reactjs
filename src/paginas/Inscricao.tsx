import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Rodape from "../componentes/Rodape";
import Logo from "../recursos/logo.svg";

const Inscricao = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  function handleInscricao(event: FormEvent) {
    event.preventDefault();
    navigate("/evento");
  }

  return (
    <>
      <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
        <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
          <div className="max-w-[640px]">
            <img src={Logo} alt="Logo" />

            <h1 className="mt-8 text-[2.5rem] leading-tight">
              Construa uma{" "}
              <span className="text-blue-500 font-medium">aplicação completa</span>{" "}
              com <span className="text-blue-500 font-medium">React</span>
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Em apenas uma semana você vai dominar na prática uma das tecnologias
              mais utilizadas e com alta demanda para acessar as melhores
              oportunidades do mercado.
            </p>
          </div>

          <div className="p-8 bg-gray-700 border border-gray-500 rounded">
            <strong className="text-2xl mb-6 block">
              Inscreva-se gratuitamente
            </strong>

            <form onSubmit={handleInscricao} className="flex flex-col gap-2 w-full">
              <input
                required
                className="bg-gray-900 rounded px-5 h-14"
                type="text"
                placeholder="Seu nome completo"
                onChange={(event) => setNome(event.target.value)}
              />
              <input
                required
                className="bg-gray-900 rounded px-5 h-14"
                type="email"
                placeholder="Digite seu e-mail"
                onChange={(event) => setEmail(event.target.value)}
              />

              <button
                type="submit"
                className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                Garantir minha vaga
              </button>
            </form>
          </div>
        </div>

        <img src="/src/recursos/code-mockup.png" className="mt-10" alt="" />
      </div>
      <Rodape />
    </>
  );
};

export default Inscricao;
