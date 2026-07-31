"use client";

import { useRouter } from "next/navigation";
import "./home.css";

const produtos = [
  {
    id: 1,
    nome: "Queijo coalho artesanal",
    preco: "R$ 24,90",
    imagem: "Queijo coalho artesanal.png",
  },
  {
    id: 2,
    nome: "Manga Tommy",
    preco: "R$ 32,00",
    imagem: "Manga Tommy(caixa)-Copia.png ",
  },
  {
    id: 3,
    nome: "Bolo de rolo",
    preco: "R$ 45,00",
    imagem: "9fc05fc3f75978de9a9dcb8c1ec68fe9799cf774.jpg",
  },
  {
    id: 4,
    nome: "Mel de abelha",
    preco: "R$ 38,50",
    imagem: "Mel de abelha 500g.png",
  },
  {
    id: 5,
    nome: "Farinha de mandioca",
    preco: "R$ 9,90",
    imagem: "a343546d702ae85e7eca686a8bebde5cc8215e84.jpg",
  },
  {
    id: 6,
    nome: "Tapioca",
    preco: "R$ 12,00",
    imagem: "49cc59c6bcf960b25924bb27f0370915bbbfa44a.jpg",
  },
  {
    id: 7,
    nome: "Rapadura",
    preco: "R$ 7,50",
    imagem: "169fac255c4194e057271f29970b5187de411810.jpg",
  },
  {
    id: 8,
    nome: "Cajá",
    preco: "R$ 15,90",
    imagem: "Cajá (polpa congelada).png ",
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <main className="container">

      <header className="topo">

        <div className="logo">
          <h2>Comerciantes PE</h2>
        </div>

        <div className="menu">

          <button onClick={() => router.push("/cadastro")}>
            + Cadastrar Produto
          </button>

          <button onClick={() => router.push("/meus-produtos")}>
            Meus Produtos
          </button>

          <button onClick={() => router.push("/")}>
            Sair
          </button>

        </div>

      </header>

      <section>

        <h1>Produtos disponíveis</h1>

        <p>
          Explore o que os comerciantes pernambucanos estão oferecendo.
        </p>

      </section>

      <section className="grid">

        {produtos.map((produto) => (

          <div
            className="card"
            key={produto.id}
            onClick={() => router.push(`/produto/${produto.id}`)}
          >

            <img src={produto.imagem} alt={produto.nome} />

            <h3>{produto.nome}</h3>

            <span>{produto.preco}</span>

          </div>

        ))}

      </section>

    </main>
  );
}