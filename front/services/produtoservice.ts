import api from "./api";
import { produto } from "../types/produto";


export async function listarProdutos(): Promise<produto[]> {
  const response = await api.get("/produtos");

  return response.data;
}

export async function buscarProduto(id: number): Promise<produto> {
  const response = await api.get(`/produtos/${id}`);

  return response.data;
}

export async function criarProduto(
  produto: Omit<produto, "id">
): Promise<produto> {
  const response = await api.post("/produtos", produto);

  return response.data;
}

export async function atualizarProduto(
  id: number,
  produto: Partial<produto>
): Promise<produto> {
  const response = await api.put(`/produtos/${id}`, produto);

  return response.data;
}

export async function excluirProduto(id: number): Promise<void> {
  await api.delete(`/produtos/${id}`);
}