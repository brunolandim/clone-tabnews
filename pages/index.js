import Image from "next/image";

function Home() {
  return (
    <div className="container">
      <h1>Você é minha quase motorista preferida</h1>
      <Image
        src="/fiat.gif"
        width={200}
        height={200}
        alt="imagem de um carro"
      />
    </div>
  );
}

export default Home;
