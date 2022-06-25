import Logo from "../recursos/logo.svg";

const Cabecalho = () => {
  return (
    <>
      <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
        <img src={Logo} alt="Logo" />
      </header>
    </>
  );
};

export default Cabecalho;
