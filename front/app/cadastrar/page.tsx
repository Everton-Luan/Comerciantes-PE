"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { criarProduto } from "../../services/produtoService";
import "./cadastro.css";

export default function CadastroProduto() {
  const router = useRouter();

  const [produto, setProduto] = useState({
    imagem: "",
    nome: "",
    preco: "",
    telefone: "",
    local: "",
  });

  const [salvando, setSalvando] = useState(false);

  function alterarCampo(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
    });
  }

  async function salvarProduto(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    try {
      setSalvando(true);

      // Converte o preço para número
      const precoNumerico = Number(
        produto.preco
          .replace("R$", "")
          .replace(/\s/g, "")
          .replace(",", ".")
      );

      if (isNaN(precoNumerico)) {
        alert("Digite um preço válido.");
        return;
      }

      // Envia o produto para o Back-end
      await criarProduto({
        imagem: produto.imagem,
        nome: produto.nome,
        preço: precoNumerico,
        telefone: produto.telefone,
        local: produto.local,
      });

      alert("Produto cadastrado com sucesso!");

      // Volta para a Home
      router.push("/home");

    } catch (error) {
      console.error("Erro ao cadastrar produto:", error);

      alert("Erro ao cadastrar produto. Verifique se o Back-end está funcionando.");

    } finally {
      setSalvando(false);
    }
  }

  return (
    <main className="container">

      <button
        className="voltar"
        onClick={() => router.back()}
      >
        ← Voltar
      </button>

      <div className="card">

        <h1>Cadastrar Produto</h1>

        <p>Todos os campos são obrigatórios.</p>

        <form onSubmit={salvarProduto}>

          <label>Foto do produto (URL)</label>

          <input
            type="url"
            placeholder="https://..."
            name="imagem"
            value={produto.imagem}
            onChange={alterarCampo}
            required
          />

          {produto.imagem && (
            <div className="imagem-preview">
              <img
                src={produto.imagem}
                alt="Pré-visualização do produto"
              />
            </div>
          )}

          <label>Nome do Produto</label>

          <input
            type="text"
            placeholder="Ex.: Queijo Coalho"
            name="nome"
            value={produto.nome}
            onChange={alterarCampo}
            required
          />

          <div className="linha">

            <div>
              <label>Preço</label>

              <input
                type="text"
                placeholder="R$ 0,00"
                name="preco"
                value={produto.preco}
                onChange={alterarCampo}
                required
              />
            </div>

            <div>
              <label>Telefone</label>

              <input
                type="text"
                placeholder="(81) 99999-9999"
                name="telefone"
                value={produto.telefone}
                onChange={alterarCampo}
                required
              />
            </div>

          </div>

          <label>Local</label>

          <input
            type="text"
            placeholder="Recife - PE"
            name="local"
            value={produto.local}
            onChange={alterarCampo}
            required
          />

          <div className="botoes">

            <button
              type="submit"
              className="salvar"
              disabled={salvando}
            >
              {salvando
                ? "Salvando..."
                : "Salvar Produto"}
            </button>

            <button
              type="button"
              className="cancelar"
              onClick={() => router.push("/home")}
            >
              Cancelar
            </button>

          </div>

        </form>

      </div>

    </main>
  );
}