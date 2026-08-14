"use client";

import { useRouter } from "next/navigation"; 
import "./meus-produtos.css";

const produtos = [
  {
    id: 1,
    nome: "Queijo coalho artesanal",
    preco: "R$ 24,90",
    local: "Caruaru - PE",
    imagem: "Queijo coalho artesanal.png",
  },

  {
   id: 2,
   nome: "Manga Tommy",
   preco: "R$ 32,00",
   local: "Petrolina - PE",
   imagem: "Manga Tommy(caixa)-Copia.png",
  },

  {
    id: 3,
    nome: "Bolo de rolo tradicional",
    preco: "R$ 45,00",
    local: "Recife - PE",
    imagem: "9fc05fc3f75978de9a9dcb8c1ec68fe9799cf774.jpg",
  },

  { 
    id: 4,
    nome: "Mel de abelha",
    preco: "R$ 38,50",
    local: " Exu - PE",
    imagem: "Mel de abelha 500g.png",

  },

  {  
    id: 5,
    nome: "Farinha de mandioca",
    preco: "R$ 9,90",
    local: "Araripina - PE",
    imagem: "a343546d702ae85e7eca686a8bebde5cc8215e84.jpg",
  },
    
  {
    id: 6,
    nome: "Tapioca fresca",
    preco: "R$ 12,00",
    local: "Olinda - PE",
    imagem: "49cc59c6bcf960b25924bb27f0370915bbbfa44a.jpg",
  },

  {
    id: 7,
    nome: "Rapadura",
    preco: "R$ 7,50",
    local: "Santa Cruz da Baixa Verde - PE",
    imagem: "169fac255c4194e057271f29970b5187de411810.jpg",
},

{
     id: 8,
    nome: "Cajá",
    preco: "R$ 15,90",
    local: "Vitória de Santo Antão - PE",
    imagem: "Cajá (polpa congelada).png ",
},

];

export default function MeusProdutos() {
  const router = useRouter();

  function visualizar(id: number) {
    router.push(`/produto/${id}`);
  }

  function editar(id: number) {
    router.push(`/editar/${id}`);
  }

  function excluir(id: number) {
    const confirmar = confirm("Deseja realmente excluir este produto?");

    if (confirmar) {
      alert(`Produto ${id} excluído!`);
    }
  }

  return (
    <main className="container">

      <header className="topo">

        <div>
          <h2>Comerciantes PE</h2>
        </div>

        <div className="menu">

          <button
            className="novo"
            onClick={() => router.push("/cadastro")}
          >
            + Novo Produto
          </button>

          <button onClick={() => router.push("/home")}>
            Home
          </button>

          <button onClick={() => router.push("/")}>
            Sair
          </button>

        </div>

      </header>

      <h1>Meus Produtos</h1>

      <p>Produtos cadastrados por você.</p>

      {produtos.length === 0 ? (

        <div className="vazio">

          <h2>Nenhum produto cadastrado</h2>

          <p>Comece cadastrando seu primeiro produto.</p>

          <button
            onClick={() => router.push("/cadastro")}
          >
            Cadastrar Produto
          </button>

        </div>

      ) : (

        produtos.map((produto) => (

          <div
            className="produto"
            key={produto.id}
          >

            <div className="info">

              <img
                src={produto.imagem}
                alt={produto.nome}
              />

              <div>

                <h3>{produto.nome}</h3>

                <span>{produto.preco}</span>

                <p>{produto.local}</p>

              </div>

            </div>

            <div className="acoes">

              <button
                className="ver"
                onClick={() => visualizar(produto.id)}
              >
                Ver
              </button>

              <button
                className="editar"
                onClick={() => editar(produto.id)}
              >
                Editar
              </button>

              <button
                className="excluir"
                onClick={() => excluir(produto.id)}
              >
                Excluir
              </button>

            </div>

          </div>

        ))

      )}

    </main>
  );
}