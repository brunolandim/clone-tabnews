import Image from "next/image";

function Home() {
  return (
    <div className="container">
      <h1>Você é minha quase motorista preferida</h1>
      <img src="/images/fiat.gif" width={200} height={200} />
    </div>
  );
}

export default Home;
